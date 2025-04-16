import React, { useState } from 'react';

const Step2Form = ({ formData, onSubmit, isSubmitting }) => {
  const [localFormData, setLocalFormData] = useState({
    country: formData.country || '',
    date: formData.date || '',
    time: formData.time || '12:00 pm'
  });
  
  const [errors, setErrors] = useState({});
  const [currentMonth, setCurrentMonth] = useState('April'); // Default month
  
  // Get current date for default calendar selection
  const today = new Date();
  const currentYear = today.getFullYear();
  
  // Month mapping
  const months = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  
  // Get current month index (0-11)
  const currentMonthIndex = months.indexOf(currentMonth);
  
  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  
  // Calculate the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1).getDay();
  
  // Generate calendar days array
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Available time slots
  const timeSlots = [
    '9:00 am', '10:00 am', '11:00 am', '12:00 pm', 
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: value
    });
  };

  const handleDateSelect = (day) => {
    setLocalFormData({
      ...localFormData,
      date: `${currentMonth} ${day}, ${currentYear}`
    });
  };

  const changeMonth = (direction) => {
    const currentIndex = months.indexOf(currentMonth);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % 12;
    } else {
      newIndex = (currentIndex - 1 + 12) % 12;
    }
    
    setCurrentMonth(months[newIndex]);
    
    // Reset selected date when changing months
    setLocalFormData({
      ...localFormData,
      date: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!localFormData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    
    if (!localFormData.date) {
      newErrors.date = 'Please select a date';
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

  // Create week day headers
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
    <div key={`weekday-${index}`} className="text-center py-2">{day}</div>
  ));

  // Create calendar grid with empty cells for proper day alignment
  const calendarGrid = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarGrid.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
  }
  
  // Add days of the month
  calendarDays.forEach(day => {
    const isSelected = localFormData.date === `${currentMonth} ${day}, ${currentYear}`;
    calendarGrid.push(
      <div 
        key={`day-${day}`} 
        className={`text-center py-2 cursor-pointer ${
          isSelected 
            ? 'bg-[#ffcc00] text-[#1e1e1e] rounded-full' 
            : 'hover:bg-gray-700 rounded-full'
        }`}
        onClick={() => handleDateSelect(day)}
      >
        {day}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8 border-white border-2 p-8 rounded-md bg-[#1e1e1e]">
      <div>
        <label htmlFor="country" className="block text-lg mb-2">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={localFormData.country}
          onChange={handleChange}
          className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
            errors.country ? 'border-red-500' : 'border-white'
          }`}
        />
        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
      </div>
      
      <div>
        <label className="block text-lg mb-2">What time works best for you?</label>
        
        <div className="border-2 border-white rounded-md p-2 mb-4">
          {/* Calendar header with month navigation */}
          <div className="flex justify-between items-center mb-2">
            <button 
              type="button"
              onClick={() => changeMonth('prev')}
              className="text-lg px-2"
            >
              &lt;
            </button>
            <div className="text-lg font-medium">{currentMonth}</div>
            <button 
              type="button"
              onClick={() => changeMonth('next')}
              className="text-lg px-2"
            >
              &gt;
            </button>
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {weekDays}
            {calendarGrid}
          </div>
          
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        
        {/* Time selector */}
        <select
          id="time"
          name="time"
          value={localFormData.time}
          onChange={handleChange}
          className="w-full p-3 bg-[#1e1e1e] border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          {timeSlots.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#ffcc00] hover:bg-yellow-500 text-[#1e1e1e] cursor-pointer font-normal py-2 px-8 rounded-md transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Booking...' : 'Book'}
        </button>
      </div>
    </form>
  );
};

export default Step2Form;