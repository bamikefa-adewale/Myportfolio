import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCalling } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const formRef = useRef(null);
  const YOUR_ACCESS_KEY_HERE = "9ca7c09f-f797-43bd-840f-99ec162e9e82";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        e.target.reset(); // Reset form fields
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Check your internet connection.");
    }
  };

  return (
    <section
      id="contact"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-20 lg:mx-[170px] mx-5 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10 py-10">
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

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="text-center flex flex-col items-start gap-6 w-full "
        >
          <input type="hidden" name="access_key" value={YOUR_ACCESS_KEY_HERE} />

          <label className="text-[#d8d8d8] text-lg sm:text-xl font-medium">
            Your Name
          </label>
          <input
            className="w-full  sm:h-[70px] px-4 py-3 rounded-md bg-[#32323c] text-[#a0a0a0] text-lg sm:text-xl"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label className="text-[#d8d8d8] text-lg sm:text-xl font-medium">
            Your Email
          </label>
          <input
            className="w-full h-[60px] sm:h-[70px] px-4 py-3 rounded-md bg-[#32323c] text-[#a0a0a0] text-lg sm:text-xl"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />

          <label className="text-[#d8d8d8] text-lg sm:text-xl font-medium">
            Write your message here
          </label>
          <textarea
            className="w-full h-[150px] sm:h-[180px] px-4 py-3 rounded-md bg-[#32323c] text-[#a0a0a0] text-lg sm:text-xl"
            name="message"
            placeholder="Enter your message"
            rows={5}
            required
          />

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 capitalize text-white rounded-full border-2 border-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Submit <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
