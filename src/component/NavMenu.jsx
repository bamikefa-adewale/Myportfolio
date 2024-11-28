import React from "react";

const NavMenu = ({ navitems, activeItem, setActiveItem, handleScroll }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-20">
      {navitems.map((item, index) => (
        <ul key={index} className="text-center md:text-left">
          <li
            onClick={() => {
              setActiveItem(item.name);
              handleScroll(item.link);
            }}
            className={`text-white cursor-pointer ${
              activeItem === item.name
                ? "border-b-2 border-pink-100"
                : "border-b-4 border-transparent"
            }`}
          >
            <h3 className="text-base md:text-xl">{item.name}</h3>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default NavMenu;
