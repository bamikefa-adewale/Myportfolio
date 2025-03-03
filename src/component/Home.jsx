const Home = () => {
  const profile =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741016876/Bamtech_blusza.jpg";

  return (
    <section
      id="hero"
      className="flex flex-col font-outfit items-center gap-6 sm:gap-9 text-white px-4"
    >
      <img
        src={profile}
        alt="profile"
        className="w-[50%] sm:w-[30%] md:w-[20%] lg:w-[20%] h-[10%] rounded-full object-cover mt-[20px] sm:mt-[40px]"
      />
      <h1 className="text-center font-semibold text-[30px] sm:text-[40px] md:text-[50px] w-[90%] sm:w-[70%] md:w-[50%]">
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          I'm Adewale John,
        </span>{" "}
        a frontend developer specializing in creating seamless and engaging user
        experiences.
      </h1>
      <p className="text-[16px] sm:text-[20px] md:text-[24px] leading-7 sm:leading-8 text-center w-[95%] sm:w-[80%] md:w-[60%]">
        With expertise in React.js, Next.js, Typescript and responsive design, I
        focus on building intuitive and interactive interfaces that elevate user
        engagement and drive results
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[16px] sm:text-[24px]">
        <a
          href="https://wa.me/2348166176457"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[10px] sm:py-[20px] capitalize px-[30px] sm:px-[50px] cursor-pointer rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Connect with me
        </a>
        <a
          href="/Adewale_Bamikefa_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[10px] sm:py-[20px] px-[30px] sm:px-[50px] capitalize text-white cursor-pointer rounded-full border-2 border-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
