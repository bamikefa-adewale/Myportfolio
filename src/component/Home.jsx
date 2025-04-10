const Home = () => {
  const profile =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741016876/Bamtech_blusza.jpg";

  return (
    <section
      id="home"
      className="flex flex-col font-outfit items-center gap-6 sm:gap-9  px-4"
    >
      <img
        src={profile}
        alt="profile"
        className="size-60 md:size-80 lg:size-96 rounded-full"
      />
      <h1 className="text-center font-semibold text-[30px] text-white sm:text-[40px] md:text-[50px] w-[90%] sm:w-[70%] md:w-[50%]">
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          I’m Adewale John,
        </span>{" "}
        a Sofaware Developer specializing in creating seamless and engaging user
        experiences.
      </h1>
      <p className="text-[18px] text-gray-50 sm:text-[16px] md:text-[20px] leading-7 sm:leading-8 text-center w-[95%] sm:w-[80%] md:w-[60%]">
        With expertise in React.js, Next.js, TypeScript, PostgreSQL, TypeORM,
        and NestJS, I focus on building scalable full-stack applications. My
        passion lies in crafting intuitive and interactive interfaces with
        responsive design that elevate user engagement and drive results.
      </p>
      <div className="flex  items-center gap-4 sm:gap-6 text-[16px] sm:text-[24px]">
        <a
          href="https://wa.me/2348166176457"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[10px] sm:py-[20px] capitalize px-[30px] sm:px-[50px] cursor-pointer rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Connect with me
        </a>
        <button className="border py-[10px] text-white hover:text-black sm:py-[20px] capitalize px-[30px] sm:px-[50px] cursor-pointer rounded-full  hover:bg-slate-200 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg ">
          <a
            href="
            /Adewale_Bamikefa_Resume2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </section>
  );
};

export default Home;
