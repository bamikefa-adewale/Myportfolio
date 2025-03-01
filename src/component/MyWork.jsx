import CustomTitle from "../ui/CustomTitle";
import { my_work } from "../constant/My_work";

const MyWork = () => {
  return (
    <section
      id="my_work"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-10 lg:mx-[170px] mx-5"
    >
      <CustomTitle title="My Work" />
      <div className="container px-5 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-[30px] mb-10">
        {my_work.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-4 p-5 border-2 border-white rounded-xl"
            >
              <h2 className="text-2xl font-normal ">{data.work_name}</h2>
              <img
                src={data.work_img}
                alt={data.work_name}
                className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 hover:bg-pink-400 transition duration-300 ease-in-out"
              />
              <a
                href={data.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4  text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                View Website
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
