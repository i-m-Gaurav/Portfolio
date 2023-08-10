import React from "react";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-center text-black">Thank you! Your message has been sent.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-[#00df9a] px-4 py-2 rounded hover:bg-[#00fd9a] text-black"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default Popup;
