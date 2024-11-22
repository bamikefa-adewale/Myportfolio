import React from "react";

const CustomTitle = ({ title, children }) => {
  return (
    <h2 className=" font-semibold text-[80px] py-0 px-[30px] text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
      {children || title}
    </h2>
  );
};

export default CustomTitle;
