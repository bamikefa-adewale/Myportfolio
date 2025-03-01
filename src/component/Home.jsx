import profile_img from "../assets/profile_img.png";

const Home = () => {
  return (
    <section
      id="hero"
      className="flex flex-col font-outfit items-center gap-6 sm:gap-9 text-white px-4"
    >
      <img
        src={profile_img}
        alt="profile_img"
        className="w-[50%] sm:w-[30%] md:w-[20%] h-auto rounded-full object-cover mt-[20px] sm:mt-[40px]"
      />
      <h1 className="text-center font-semibold text-[30px] sm:text-[40px] md:text-[50px] w-[90%] sm:w-[70%] md:w-[50%]">
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          I"m Adewale John,
        </span>{" "}
        frontend developer based in Nigeria
      </h1>
      <p className="text-[16px] sm:text-[20px] md:text-[24px] leading-7 sm:leading-8 text-center w-[95%] sm:w-[80%] md:w-[60%]">
        I am a frontend Developer skilled in React.js, Tailwind CSS, and
        responsive design. Passionate about crafting intuitive, interactive user
        interfaces.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[16px] sm:text-[24px]">
        <div className="py-[10px] sm:py-[20px] capitalize px-[30px] sm:px-[50px] cursor-pointer rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          Connect with me
        </div>
        <button className="py-[10px] sm:py-[20px] px-[30px] sm:px-[50px] capitalize text-white cursor-pointer rounded-full border-2 border-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          My resume
        </button>
      </div>
    </section>
  );
};

export default Home;
