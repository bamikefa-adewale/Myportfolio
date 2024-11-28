import React from "react";
import { FaTimes } from "react-icons/fa";
import NavMenu from "./NavMenu";

const MobileMenuModal = ({
  navitems,
  activeItem,
  setActiveItem,
  handleScroll,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl"
      >
        <FaTimes />
      </button>
      {/* Mobile Nav Menu */}
      <NavMenu
        navitems={navitems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        handleScroll={handleScroll}
      />
      {/* Contact Button */}
      <div className="mt-5">
        <button
          onClick={onClose}
          className="bg-pink-500 text-white px-4 py-2 rounded-md"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default MobileMenuModal;
