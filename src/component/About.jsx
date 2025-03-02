import CustomTitle from "../ui/CustomTitle";
import profile from "../assets/profile_img.png";
import { skills } from "../constant/Skills";

const About = () => {
  return (
    <section
      id="about"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-10 lg:mx-[170px] mx-3 "
    >
      <div className="mt-10">
        {" "}
        <CustomTitle title="About me" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start my-4">
        {/* Profile Image */}
        <div className="col-span-1 md:col-span-1 w-full bg-cover rounded-sm p-2 bg-gradient-to-r from-pink-700 to-purple-300">
          <img
            src={profile}
            alt="profile"
            className="w-full rounded  hover:scale-105 transition duration-300 ease-linear"
          />
        </div>

        {/* Content Section */}
        <section className="col-span-1 md:col-span-2  flex flex-col gap-10">
          {/* Description */}
          <div className="text-base sm:text-lg md:text-2xl font-light flex flex-col gap-4">
            <p>
              I'm an experienced Frontend Developer with a strong track record
              in the field. Over the years, I've had the opportunity to work
              with some amazing organizations, helping them achieve their goals
              and grow their businesses.
            </p>
            <p>
              What drives me is my genuine passion for frontend development.
              It’s not just about the years of experience I bring to the table,
              but also the excitement and commitment I pour into every project I
              work on.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col text-white  gap-4 cursor-pointer">
            {skills.map((skills, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 items-center hover:scale-105 transition duration-300 ease-linear"
              >
                <p className="text-lg sm:text-xl text-white md:text-2xl font-medium min-w-[100px] sm:min-w-[150px]">
                  {skills.name}
                </p>
                <hr
                  style={{ width: skills.width }}
                  className="w-full h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-10 mb-20">
        {/* Experience */}
        <div className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-3xl sm:text-[40px] font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            +
          </h1>
          <p className="font-medium text-lg sm:text-2xl text-center">
            Reactjs, Nextjs, TypeScript
          </p>
        </div>

        {/* Divider for Desktop View */}
        <div className="hidden md:block w-px h-20 bg-gray-300"></div>

        {/* Projects */}
        <div className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-3xl sm:text-[40px] font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            +
          </h1>
          <p className="font-medium text-lg sm:text-2xl text-center">
            Node.js, PostgreSQL
          </p>
        </div>

        {/* Divider for Desktop View */}
        <div className="hidden md:block w-px h-20 bg-gray-300"></div>

        {/* Happy Clients */}
        <div className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-3xl sm:text-[40px] font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            +
          </h1>
          <p className="font-medium text-lg sm:text-2xl text-center">
            Git, GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
