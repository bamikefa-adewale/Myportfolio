import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCalling } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-20 lg:mx-[170px] mx-5 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between  items-center gap-10 py-10">
        <div className="flex flex-col gap-8 w-full sm:w-[50%] ">
          <h1 className="font-extrabold text-[30px] sm:text-[40px] md:text-[60px] text-transparent bg-gradient-to-r from-pink-700 to-purple-300 bg-clip-text">
            Let's talk
          </h1>
          <p className="text-[#d8d8d8] text-base sm:text-xl leading-7 sm:leading-9 max-w-md">
            I'm currently available to take on new projects. Feel free to send
            me a message about anything you want me to work on. You can contact
            me anytime.
          </p>
          <div className="flex flex-col gap-6 text-white text-base sm:text-2xl">
            <span className="flex items-center gap-2">
              <AiOutlineMail />
              <p>bamikefaadewale@gmail.com</p>
            </span>
            <span className="flex items-center gap-2">
              <TbPhoneCalling /> <p>+2348166176457</p>
            </span>
            <span className="flex items-center gap-2">
              <MdLocationOn /> <p>Lagos, Nigeria</p>
            </span>
          </div>
        </div>
        <form className=" text-center flex flex-col items-start gap-6 w-full sm:w-[50%]">
          <label
            className="text-[#d8d8d8] text-base sm:text-xl font-medium"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="w-full h-[50px] sm:h-[60px] font-outfit rounded pl-4 bg-[#32323c] text-[#a0a0a0] text-base sm:text-xl"
            type="text"
            placeholder="Enter your name"
          />
          <label
            className="text-[#d8d8d8] text-base sm:text-xl font-medium"
            htmlFor="name"
          >
            Your Email
          </label>
          <input
            className="w-full h-[50px] sm:h-[60px] font-outfit rounded pl-4 bg-[#32323c] text-[#a0a0a0] text-base sm:text-xl"
            type="text"
            placeholder="Enter your Email"
          />
          <label
            className="text-[#d8d8d8] text-base sm:text-xl font-medium"
            htmlFor="name"
          >
            Write your message here
          </label>
          <textarea
            className="w-full h-[50px] sm:h-[60px] font-outfit rounded pl-4 bg-[#32323c] text-[#a0a0a0] text-base sm:text-xl"
            name=" messagae"
            placeholder="Enter your messagae"
            rows={8}
          />
          <div className="flex items-center gap-2 mb-10 px-6 py-2 capitalize text-white cursor-pointer rounded-full border-2 border-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
            <button>Submit</button>
            <FaArrowRight />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
