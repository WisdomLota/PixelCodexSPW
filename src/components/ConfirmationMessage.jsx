import React from 'react';

const ConfirmationMessage = ({ onDone }) => {
  return (
    <div className="text-center p-4 bg-[#1e1e1e] border-2 border-white rounded-md poppins-regular">
      <h2 className="text-2xl font-bold mb-4">Session Booked</h2>
      
      <p className="mb-8 text-center">
        Thank you for booking this session. The session will be an online meet on the date you set. 
        Details about the session will be sent to the set email
      </p>
      
      <button
        onClick={onDone}
        className="border-2 border-[#ffcc00] hover:border-yellow-500 hover:text-yellow-500 cursor-pointer text-[#ffcc00] font-normal py-2 px-8 rounded-md transition-colors"
      >
        Done
      </button>
    </div>
  );
};

export default ConfirmationMessage;