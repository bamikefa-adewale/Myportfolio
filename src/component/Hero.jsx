import React from "react";
import profile_img from "../assets/profile_img.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col font-outfit items-center gap-9 text-white"
    >
      <img
        src={profile_img}
        alt="profile_img"
        className="w-[20%] h-[20%] rounded-full object-cover mt-[40px]"
      />
      <h1 className="text-center font-semibold text-[50px] w-[50%]">
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          I'm Adewale John,
        </span>{" "}
        frontend developer based in Nigeria
      </h1>
      <p className="text-[24px] leading-10 text-center w-[60%]">
        I am a frontend Developer skilled in React.js, Tailwind CSS, and
        responsive design. Passionate about crafting intuitive, interactive user
        interfaces.
      </p>
      <div className="flex items-center gap-6 text-[24px] font-[50px] mb-10">
        <div className="py-[20px] capitalize px-[50px] cursor-pointer rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          {" "}
          connect with me
        </div>
        <button className="py-[20px] px-[50px] capitalize text-white cursor-pointer rounded-full border-2 border-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          my resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
