import React, { useState } from "react";
import { navitems } from "../constant/NavItem";
import CustomButton from "../ui/CustomButton";
import NavMenu from "./NavMenu";
import MobileMenuModal from "./MobileMenuModal";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close modal after clicking a link
  };

  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <nav className="flex flex-wrap justify-between py-5 font-outfit text-lg mb-10 mx-auto w-[90%] items-center">
      <div>
        <CustomButton title="JonnyTech" />
      </div>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="text-white text-2xl lg:hidden"
      >
        <FaBars />
      </button>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-80 items-center">
        <NavMenu
          navitems={navitems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleScroll={handleScroll}
        />
        <CustomButton title="Contact Us" onClick={handleClick} />
      </div>
      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <MobileMenuModal
          navitems={navitems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleScroll={handleScroll}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;
