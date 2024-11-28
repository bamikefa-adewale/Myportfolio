import React, { useState } from "react";
import CustomTitle from "../ui/CustomTitle";
import { my_work } from "../constant/My_work";
import { FaArrowRight } from "react-icons/fa6";

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section
      id="my_work"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-10 lg:mx-[170px] mx-5 "
    >
      <CustomTitle title="My Work" />
      <div className="container  px-5 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-[30px] mb-10">
        {my_work.slice(0, showMore ? my_work.length : 6).map((data, i) => {
          return (
            <img
              key={i}
              src={data.work_img}
              alt="work_img"
              className="flex flex-col justify-center gap-2 p-5 border-2 border-white rounded-xl cursor-pointer hover:scale-105 hover:bg-pink-400 transition duration-300 ease-in-out"
            />
          );
        })}
      </div>
      <div className="flex items-center  text-center justify-center w-full sm:w-auto gap-2 mb-10 px-6 py-2 capitalize text-white cursor-pointer rounded-full border-2 border-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <button onClick={handleShowMore} className="  ">
          {showMore ? "Show Less" : "Show More"}
        </button>

        <FaArrowRight />
      </div>
    </section>
  );
};

export default MyWork;
