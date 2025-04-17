import React, { useState, useEffect } from 'react';

const Step1Form = ({ formData, onSubmit }) => {
  const [localFormData, setLocalFormData] = useState({
    email: formData.email || '',
    whatsappNumber: formData.whatsappNumber || '',
    category: formData.category || 'Parent',
    reasonForConsultation: formData.reasonForConsultation || ''
  });
  
  const [errors, setErrors] = useState({});
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLocalFormData({
  //     ...localFormData,
  //     [name]: value
  //   });
  // };


  // List of all categories
  const categories = [
    "Parent", "Sibling", "Student", "Other"
  ];

  // Filter categories based on search term
  const filteredCategories = categories.filter(category => 
    category.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'category') {
      setCategorySearchTerm(value);
      setLocalFormData({
        ...localFormData,
        [name]: value
      });
    } else if (name === 'whatsappNumber') {
      // Allow only digits, '+', spaces, parentheses, and hyphens
      const sanitizedValue = value.replace(/[^\d+\s()-]/g, '');
      setLocalFormData({
        ...localFormData,
        [name]: sanitizedValue
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [name]: value
      });
    }
  };

  const handleCategorySelect = (country) => {
    setLocalFormData({
      ...localFormData,
      country
    });
    setCategorySearchTerm(country);
    setShowCategoryDropdown(false);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!localFormData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(localFormData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Enhanced WhatsApp number validation
    if (!localFormData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    } else {
      // Remove all non-digit characters for validation
      const digitsOnly = localFormData.whatsappNumber.replace(/\D/g, '');
      
      // Basic length check (most international numbers are between 7 and 15 digits)
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        newErrors.whatsappNumber = 'WhatsApp number should be between 7 and 15 digits';
      }
      
      // Check for valid international format if starts with + sign
      if (localFormData.whatsappNumber.startsWith('+')) {
        if (!/^\+\d{1,3}[ ]?\d+$/.test(localFormData.whatsappNumber)) {
          newErrors.whatsappNumber = 'Invalid international format (should be +[country code] followed by number)';
        }
      }
      
      // Ensure the number contains mostly digits
      const percentDigits = (digitsOnly.length / localFormData.whatsappNumber.length) * 100;
      if (percentDigits < 70) {
        newErrors.whatsappNumber = 'WhatsApp number contains too many non-digit characters';
      }
    }

    if (!localFormData.category.trim()) {
      newErrors.category = 'Category is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // // Format WhatsApp number for display
  // const formatWhatsAppNumber = (e) => {
  //   if (!localFormData.whatsappNumber.trim()) return;
    
  //   let formatted = localFormData.whatsappNumber;
  //   const digitsOnly = formatted.replace(/\D/g, '');
    
  //   // If it doesn't start with +, assume it needs formatting
  //   if (!formatted.startsWith('+') && digitsOnly.length > 0) {
  //     // First check if it might be an international number without the + sign
  //     if (digitsOnly.length > 10) {
  //       // Assume first 1-3 digits are country code
  //       const countryCodeLength = Math.min(3, digitsOnly.length - 7);
  //       formatted = '+' + digitsOnly.substring(0, countryCodeLength) + ' ' + 
  //                  digitsOnly.substring(countryCodeLength);
  //     }
  //     // For numbers that look like local (typically 10 digits)
  //     else if (digitsOnly.length === 10) {
  //       formatted = '(' + digitsOnly.substring(0, 3) + ') ' + 
  //                  digitsOnly.substring(3, 6) + '-' + 
  //                  digitsOnly.substring(6);
  //     }
      
  //     setLocalFormData({
  //       ...localFormData,
  //       whatsappNumber: formatted
  //     });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(localFormData);
    }
  };

  // Click outside to close dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (showCategoryDropdown && !event.target.closest("#category-container")) {
          setShowCategoryDropdown(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showCategoryDropdown]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border-white border-2 p-6 rounded-md bg-[#1e1e1e] poppins-regular">
      <div>
        <label htmlFor="email" className="block text-lg mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={localFormData.email}
          placeholder='e.g pixel@gmail.com'
          onChange={handleChange}
          className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
            errors.email ? 'border-red-500' : 'border-white'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="whatsappNumber" className="block text-lg mb-2">Whatsapp Number</label>
        <div className="relative">
          <input
            type="text"
            id="whatsappNumber"
            name="whatsappNumber"
            value={localFormData.whatsappNumber}
            onChange={handleChange}
            placeholder="e.g +2348108253273"
            className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
              errors.whatsappNumber ? 'border-red-500' : 'border-white'
            }`}
          />
          {/* <div className="text-gray-400 text-xs mt-1">Include country code (e.g., +1 for US/Canada)</div> */}
        </div>
        {errors.whatsappNumber && <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>}
      </div>
      
      <div id="category-container" className="relative">
        <label htmlFor="category" className="block text-lg mb-2">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={categorySearchTerm}
          onChange={handleChange}
          onFocus={() => setShowCategoryDropdown(true)}
          placeholder="Select a category"
          className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
            errors.category ? 'border-red-500' : 'border-white'
          }`}
        />
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        
        {showCategoryDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-[#1e1e1e] border-2 border-white rounded-md max-h-60 overflow-y-auto">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-800"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-400">No categories match your search</div>
            )}
          </div>
        )}
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
          className="border-[#ffcc00] border-2 hover:border-yellow-600 hover:text-yellow-600 text-[#ffcc00] cursor-pointer font-normal py-2 px-8 rounded-md transition-colors"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1Form;