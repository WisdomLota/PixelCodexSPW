import React, { useState, useEffect } from 'react';

const Step2Form = ({ formData, onSubmit, isSubmitting }) => {
  const [localFormData, setLocalFormData] = useState({
    country: formData.country || '',
    date: formData.date || '',
    time: formData.time || '12:00 pm'
  });
  
  const [errors, setErrors] = useState({});
  const [currentMonth, setCurrentMonth] = useState('April'); // Default month
  const [countrySearchTerm, setCountrySearchTerm] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  
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

  // List of all countries
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  // Filter countries based on search term
  const filteredCountries = countries.filter(country => 
    country.toLowerCase().includes(countrySearchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'country') {
      setCountrySearchTerm(value);
      setLocalFormData({
        ...localFormData,
        [name]: value
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [name]: value
      });
    }
  };

  const handleCountrySelect = (country) => {
    setLocalFormData({
      ...localFormData,
      country
    });
    setCountrySearchTerm(country);
    setShowCountryDropdown(false);
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
    
    // Resets selected date when changing months
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

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCountryDropdown && !event.target.closest("#country-container")) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCountryDropdown]);

  // Creating week day headers
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
    <div key={`weekday-${index}`} className="text-center py-2">{day}</div>
  ));

  // Creating calendar grid with empty cells for proper day alignment
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
            ? 'bg-yellow-400 text-gray-900 rounded-full' 
            : 'hover:bg-gray-700 rounded-full'
        }`}
        onClick={() => handleDateSelect(day)}
      >
        {day}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8 border-white border-2 p-8 rounded-md bg-[#1e1e1e] poppins-regular">
      <div id="country-container" className="relative">
        <label htmlFor="country" className="block text-lg mb-2">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={countrySearchTerm}
          onChange={handleChange}
          onFocus={() => setShowCountryDropdown(true)}
          placeholder="Select or type a country"
          className={`w-full p-3 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
            errors.country ? 'border-red-500' : 'border-white'
          }`}
        />
        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        
        {showCountryDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-[#1e1e1e] border-2 border-white rounded-md max-h-60 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-800"
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-400">No countries match your search</div>
            )}
          </div>
        )}
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
          className="w-full p-3 bg-gray-900 border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
          className={`bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer font-normal py-2 px-8 rounded-md transition-colors ${
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