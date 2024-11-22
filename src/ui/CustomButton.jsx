import React from "react";

const CustomButton = ({ title, onClick, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-md px-4 py-2 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
    >
      {children || title}
    </button>
  );
};

export default CustomButton;
