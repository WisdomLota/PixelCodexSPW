import React, { useState } from 'react';

const Step1Form = ({ formData, onSubmit }) => {
  const [localFormData, setLocalFormData] = useState({
    email: formData.email || '',
    whatsappNumber: formData.whatsappNumber || '',
    category: formData.category || 'Parent',
    reasonForConsultation: formData.reasonForConsultation || ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!localFormData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(localFormData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!localFormData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(localFormData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 border-white border-2 p-8 rounded-md bg-[#1e1e1e]">
      <div>
        <label htmlFor="email" className="block text-lg mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={localFormData.email}
          onChange={handleChange}
          className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
            errors.email ? 'border-red-500' : 'border-white'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="whatsappNumber" className="block text-lg mb-2">Whatsapp Number</label>
        <input
          type="text"
          id="whatsappNumber"
          name="whatsappNumber"
          value={localFormData.whatsappNumber}
          onChange={handleChange}
          className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
            errors.whatsappNumber ? 'border-red-500' : 'border-white'
          }`}
        />
        {errors.whatsappNumber && <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>}
      </div>
      
      <div>
        <label htmlFor="category" className="block text-lg mb-2">Category</label>
        <select
          id="category"
          name="category"
          value={localFormData.category}
          onChange={handleChange}
          className="w-full p-3 bg-[#1e1e1e] border-2 border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="Parent">Parent</option>
          <option value="Sibling">Sibling</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="reasonForConsultation" className="block text-lg mb-2">
          Reason for consultation (optional)
        </label>
        <textarea
          id="reasonForConsultation"
          name="reasonForConsultation"
          value={localFormData.reasonForConsultation}
          onChange={handleChange}
          className="w-full p-3 bg-transparent border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-h-[120px]"
        />
      </div>
      
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="border-[#ffcc00] border-2 hover:border-yellow-600 hover:text-yellow-600 text-[#ffcc00] font-normal py-2 px-8 rounded-md transition-colors"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1Form;