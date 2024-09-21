import React from 'react';

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
