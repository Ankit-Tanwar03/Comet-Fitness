import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faUser,
  faCircleInfo,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50  px-6 lg:px-24 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-white bg-opacity-0"
      }`}
    >
      <div className={`flex items-center justify-between`}>
        <div className={`${isMenuOpen ? "hidden" : "flex items-center"}`}>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-16" />
          </Link>
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "h-screen w-screen flex flex-col items-center justify-center space-y-4"
              : "flex flex-row items-center space-x-1 md:space-x-4 xl:space-x-6 transition-all duration-300 ease-in-out"
          } `}
        >
          <li
            onClick={toggleMenu}
            className={`text-white font-semibold text-lg hover:text-rose-800 transition duration-300 ease-in-out cursor-pointer ${
              isMenuOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-2 right-2 lg:top-10 lg:right-10"
              />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` text-base  cursor-pointer lg:block  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-black border-b-2 border-l hover:text-blue-950 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 px-3 rounded-full shadow-white/50 shadow-md transition duration-300 ease-in-out"
                    : "text-white hover:text-orange-400"
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <ul className="flex flex-row items-center space-x-2 lg:hidden">
            <li>
              <button
                className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
            </li>
            <li>
              <button
                className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200    ${
                  isMenuOpen ? "block mb-4" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
            </li>
            <li>
              <button
                className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200   ${
                  isMenuOpen ? "block mb-4" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </li>
          </ul>
        </ul>
        <ul className="flex-row items-center space-x-2 hidden lg:flex">
          <li>
            <button
              className={`items-center px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200  ${
                isMenuOpen ? "hidden" : "block "
              }`}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
          </li>
          <li>
            <button
              className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200    ${
                isMenuOpen ? "hidden" : "block"
              }`}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </button>
          </li>
          <li>
            <button
              className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200  ${
                isMenuOpen ? "hidden" : "block"
              }`}
            >
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
