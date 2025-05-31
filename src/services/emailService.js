// src/services/emailService.js
import emailjs from '@emailjs/browser';

// Initialize with user ID
const init = () => {
  emailjs.init("6kXtQam40V_km60QZ"); // User ID
};

const sendBookingNotification = async (formData) => {
  try {
    // Map form data to template variables
    const templateParams = {
      email: formData.email,
      whatsapp: formData.whatsappNumber,
      category: formData.category,
      reason: formData.reasonForConsultation || 'No reason provided',
      country: formData.country,
      date: formData.date,
      time: formData.time
    };
    
    // Send email using EmailJS
    const response = await emailjs.send(
      'service_fscceyp', // Service ID
      'template_r5fudwk', // Template ID
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

export { init, sendBookingNotification };