import { useState } from "react";
import { motion } from "framer-motion";
import CustomTitle from "../ui/CustomTitle";
import { service_data } from "../constant/Services";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Services = () => {
  const [expanded, setExpanded] = useState({});
  const [show, setShow] = useState(false);
  const visible = show ? service_data : service_data.slice(0, 6);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.section
      id="services"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-10 lg:mx-[170px] mx-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <CustomTitle title="My services" />
      <div className="container px-5 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 gap-10 mb-10">
        {visible.map((data, i) => {
          const isExpanded = expanded[i];

          return (
            <motion.div
              key={i}
              className="flex flex-col justify-center gap-4 p-10 border-2 border-white rounded-xl cursor-pointer transition duration-300 ease-in-out bg-gray-900"
              whileHover={{ scale: 1.05, backgroundColor: "#f472b6" }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-[28px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                {data.service_number}
              </h2>
              <h2 className="text-[28px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text hover:text-white">
                {data.name}
              </h2>

              {!isExpanded && (
                <p className="text-[#d4d4d4] text-lg leading-8 max-w-[600px]">
                  {data.introduction}
                </p>
              )}

              {isExpanded && (
                <motion.p
                  className="text-[#d4d4d4] text-lg leading-8 max-w-[600px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {data.description}
                </motion.p>
              )}

              <div
                className="flex items-center gap-5 mt-5 cursor-pointer text-blue-300 hover:text-black hover:underline"
                onClick={() => toggleExpand(i)}
              >
                <p>{isExpanded ? "Read Less" : "Read More"}</p>
                {isExpanded ? <FaArrowLeft /> : <FaArrowRight />}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        onClick={() => setShow(!show)}
        className="border py-3 px-8 rounded-full text-white hover:text-black hover:bg-slate-200 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {show ? "View Less" : "View More"}
      </motion.button>
    </motion.section>
  );
};

export default Services;
