import React, { useState } from "react";
import { navitems } from "../constant/NavItem";
import CustomButton from "../ui/CustomButton";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleScroll = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    alert("Button clicked");
  };
  return (
    <nav className=" flex justify-between py-5 font-outfit text-[25px] mx-auto w-[80%] items-center">
      <div>
        {" "}
        <CustomButton title=" JonnyTech" />
      </div>
      <div className="flex  gap-20 ">
        {" "}
        {navitems.map((item, index) => (
          <ul key={index} className="">
            <li
              onClick={() => {
                setActiveItem(item.name), handleScroll(item.link);
              }}
              className={`text-white cursor-pointer ${
                activeItem === item.name
                  ? "border-b-2 border-pink-100"
                  : "border-b-4 border-transparent"
              }`}
            >
              <h3 className="font-outfit text-[25px]"> {item.name}</h3>
            </li>
          </ul>
        ))}
      </div>
      <div>
      <CustomButton title="Contact Us" onClick={handleClick} />
      </div>
    </nav>
  );
};

export default NavBar;
