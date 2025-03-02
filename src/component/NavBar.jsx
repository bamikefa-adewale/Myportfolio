import { useState } from "react";
import { navitems } from "../constant/NavItem";
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

  return (
    <nav className="flex flex-wrap justify-between py-5 font-outfit text-lg mb-10 mx-auto w-[90%] items-center">
      <h6 className=" italic  text-fuchsia-500 rounded-md px-4 py-2 text-3xl font-semibold">
        Adew<span className="text-white">ale</span>
      </h6>

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
        <a
          href="https://wa.me/2348166176457"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[10px] sm:py-[20px] capitalize px-[30px] sm:px-[50px] cursor-pointer rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Contact Me
        </a>
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
