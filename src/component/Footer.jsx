

const Footer = () => {
  return (
    <section className=" mx-5 sm:mx-10 lg:mx-40 flex flex-col text-white gap-8">
      <div className="my-10">
        <div className="flex justify-between text-center gap-10 lg:gap-96 flex-col lg:flex-row items-center lg:items-start">
          
          <h6 className=" text-center italic  text-fuchsia-500 rounded-md px-4 py-2 text-3xl font-semibold">
            Adew<span className="text-white">ale</span>
          </h6>
          <p className="text-white text-base font-normal sm:text-lg max-w-[400px] mx-auto lg:mx-0">
            I am a Frontend Developer skilled in HTML, CSS, React.js, Next.js,
            TypeScript, and Tailwind CSS, with experience in building responsive
            and user-friendly web applications. I also have expertise in
            Node.js, PostgreSQL, Git, and GitHub.
          </p>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm sm:text-base gap-4">
          <div className="text-center lg:text-left">
            <p>© {new Date().getFullYear()} BAMTECH. All rights reserved.</p>{" "}
          </div>
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
