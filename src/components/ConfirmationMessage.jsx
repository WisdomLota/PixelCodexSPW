import React from 'react';

const ConfirmationMessage = ({ onDone }) => {
  return (
    <div className="text-center py-4">
      <h2 className="text-2xl font-bold mb-4">Session Booked</h2>
      
      <p className="mb-8 text-center">
        Thank you for booking this session. The session will be an online meet on the date you set. 
        Details about the session will be sent to the set email
      </p>
      
      <button
        onClick={onDone}
        className="bg-[#ffcc00] hover:bg-yellow-500 text-[#1e1e1e] font-normal py-2 px-8 rounded-md transition-colors"
      >
        Done
      </button>
    </div>
  );
};

export default ConfirmationMessage;