import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import CustomButton from "../ui/CustomButton";

const Footer = () => {
  return (
    <section className=" mx-5 sm:mx-10 lg:mx-40 flex flex-col text-white gap-8">
      <div className="my-10">
        <div className="flex justify-between gap-10 lg:gap-96 flex-col lg:flex-row items-center lg:items-start">
          <div className=" text-center lg:text-left py-4">
            <CustomButton title="JonnyTech" />
            <p className="text-white text-base sm:text-lg max-w-[400px] mx-auto lg:mx-0">
              I am a frontend Developer skilled in React.js, Tailwind CSS, and
              responsive design.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full gap-4">
            <div className="flex items-center gap-4 py-4 px-4 rounded-full bg-[#32323b] hover:scale-105 hover:border-2 border-white transition duration-300 ease-in-out w-full sm:w-auto">
              <MdOutlinePersonOutline />
              <input
                type="email"
                placeholder="Enter your email"
                className="font-outfit text-[14px] sm:text-[18px] outline-none border-none bg-transparent text-[#a0a0a0] flex-grow sm:flex-grow-0"
              />
            </div>

            <button className="py-4 px-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-purple-700 to-pink-500 hover:scale-105 hover:border-2 border-white transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm sm:text-base gap-4">
          <p className="text-center lg:text-left">
            @ 2024 JonnyTech. All rights reserved
          </p>
          <div className="flex flex-col-2 sm:flex-row gap-4">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
