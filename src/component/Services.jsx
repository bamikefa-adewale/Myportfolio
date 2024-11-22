import React from "react";
import CustomTitle from "../ui/CustomTitle";
import { service_data } from "../constant/Services";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <section
      id="services"
      className="text-white flex flex-col justify-center items-center gap-10 mt-[50px] mx-[170px] "
    >
      <CustomTitle title="My services" />
      <div className="container grid grid-cols-3 gap-[30px] mb-10">
        {service_data.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center gap-4 p-10 border-2 border-white rounded-xl cursor-pointer hover:scale-105 hover:bg-pink-400 transition duration-300 ease-in-out"
            >
              {" "}
              <h3 className="text-2xl  font-extrabold ">
                {data.service_number}
              </h3>
              <h2 className="text-[38px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                {data.name}
              </h2>
              <p className="text-[#d4d4d4] text-2xl leading-10 max-w-[600px]">
                {data.description}
              </p>
              <div className="flex items-center gap-5 mt-5">
                <p>Read More</p>
                <FaArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;