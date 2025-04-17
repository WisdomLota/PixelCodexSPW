import React, { useState } from 'react';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import ConfirmationMessage from './ConfirmationMessage';
import { sendBookingNotification } from '../services/emailService';

const BookingPopup = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    whatsappNumber: '',
    category: 'Parent',
    reasonForConsultation: '',
    country: '',
    date: '',
    time: '12:00 pm'
  });

  // Handle closing the popup
  const handleClose = () => {
    // Only allow closing if not submitting
    if (!isSubmitting) {
      onClose();
    }
  };

  const handleStep1Submit = (data) => {
    setFormData({
      ...formData,
      ...data
    });
    setCurrentStep(2);
  };

  const handleStep2Submit = async (data) => {
    const finalFormData = {
      ...formData,
      ...data
    };
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send notification email with form details
      await sendBookingNotification(finalFormData);
      
      // Move to confirmation step
      setFormData(finalFormData);
      setCurrentStep(3);
    } catch (err) {
      setError('Failed to submit your booking. Please try again later.');
      console.error('Booking submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDone = () => {
    setCurrentStep(1);
    setFormData({
      email: '',
      whatsappNumber: '',
      category: 'Parent',
      reasonForConsultation: '',
      country: '',
      date: '',
      time: '12:00 pm'
    });
    onClose();
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#1e1e1e] bg-opacity-70"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div className="bg-[#1e1e1e] text-white rounded-lg p-12 max-w-md w-full z-10 relative transform transition-all duration-300 ease-in-out animate-scaleIn">
        {error && (
          <div className="bg-red-500 text-white p-3 mb-4 rounded-md">
            {error}
          </div>
        )}
        
        {currentStep === 1 && (
          <Step1Form formData={formData} onSubmit={handleStep1Submit} />
        )}
        
        {currentStep === 2 && (
          <Step2Form 
            formData={formData} 
            onSubmit={handleStep2Submit} 
            isSubmitting={isSubmitting} 
          />
        )}
        
        {currentStep === 3 && (
          <ConfirmationMessage onDone={handleDone} />
        )}
      </div>
    </div>
  );
};

export default BookingPopup;