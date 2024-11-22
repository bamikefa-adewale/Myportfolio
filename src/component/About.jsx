import React from "react";
import profile from "../assets/profile_img.png";
import { Skills } from "../constant/Skills";
import CustomTitle from "../ui/CustomTitle";

const About = () => {
  return (
    <section
      id="about"
      className="text-white flex flex-col justify-center items-center gap-10 mt-[50px]  mx-[170px] "
    >
      <CustomTitle title="About me" />

      <div className="flex gap-20  items-center  my-4">
        <div className="w-full bg-cover rounded-sm p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
          <img src={profile} alt="profile_img" className="w-full rounded " />
        </div>
        <section className="flex flex-col gap-10">
          <div className="text-2xl font-light flex flex-col gap-4">
            <p>
              I am an experience Frontend Developer with over years ago of
              professional expertise in the field throughout my carrer, I have
              had the privilege of collaborating with pretigious organiztion
              contriuting to thier success and growth
            </p>
            <p>
              My passion for frontend developement is not only reflect in my
              extensive experince but also in the enthusiasn dedication i bring
              to the project
            </p>
          </div>{" "}
          <div className="flex flex-col gap-4  cursor-pointer">
            {Skills.map((Skill, i) => (
              <div
                key={i}
                className="flex gap-10 items-center hover:scale-105 transition duration-300 ease-linear"
              >
                <p className="min-w-[150px] font-medium text-2xl">
                  {Skill.nane}
                </p>
                <hr
                  style={{ width: Skill.width }}
                  className="outline-none border-none w-full h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                />
              </div>
            ))}{" "}
          </div>
        </section>
      </div>

      <div className="flex w-full justify-around mb-20">
        <div className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-[40px] font-bold  text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            10+
          </h1>
          <p className="font-medium text-2xl">YEARS OF EXPERINCE</p>
        </div>
        <hr />
        <div className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-[40px] font-bold  text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            15+
          </h1>
          <p className="font-medium text-2xl">PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-[40px] font-bold  text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            9+
          </h1>
          <p className="font-medium text-2xl">HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default About;
