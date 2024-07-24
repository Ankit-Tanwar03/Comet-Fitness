import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/Logo.png";
import authService from "../Appwrite/auth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faCircleInfo,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    const checkAuthStatus = async () => {
      const loggedIn = await authService.isLoggedIn();
      setIsAuthenticated(loggedIn);
    };

    checkAuthStatus();

    const handleAuthChange = (status) => {
      setIsAuthenticated(status);
    };

    authService.onAuthChange(handleAuthChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      authService.offAuthChange(handleAuthChange);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 px-0 sm:px-6 lg:px-12 transition-colors duration-300 ${
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
              ? "h-screen w-screen flex flex-col items-center justify-center space-y-4 bg-black"
              : "flex flex-row items-center lg:space-x-6 xl:space-x-6 transition-all duration-300 ease-in-out"
          } `}
        >
          <li
            onClick={handleMenuToggle}
            className={`text-white font-semibold text-lg hover:text-rose-800 transition duration-300 ease-in-out cursor-pointer ${
              isMenuOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-6 right-4 lg:top-10 lg:right-10"
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
            <li onClick={closeMenu}>
              <button
                className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200    ${
                  isMenuOpen ? "block mb-4" : "hidden"
                }`}
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/contact">
                <button
                  className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200   ${
                    isMenuOpen ? "block mb-4" : "hidden"
                  }`}
                >
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li
                className={`${isMenuOpen ? "block mb-4" : "hidden"}`}
                onClick={closeMenu}
              >
                <button
                  onClick={handleLogout}
                  className="text-cyan-500 font-semibold hover:text-orange-400"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li
                className={`${isMenuOpen ? "block mb-4" : "hidden"}`}
                onClick={closeMenu}
              >
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-semibold"
                      : "text-cyan-500 font-semibold hover:text-orange-400"
                  }
                >
                  Sign In
                </NavLink>
              </li>
            )}
          </ul>
        </ul>
        <ul className="flex-row items-center space-x-2 hidden lg:flex">
          <li>
            <button
              className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200    ${
                isMenuOpen ? "hidden" : "block"
              }`}
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </button>
          </li>
          <li>
            <NavLink to="/contact">
              <button
                className={`px-2 py-1 text-black border-2 text-md font-semibold hover:border-red hover:scale-105 border-white bg-gradient-to-bl from-slate-800 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 shadow-md hover:transition-all ease-in-out duration-200  ${
                  isMenuOpen ? "hidden" : "block"
                }`}
              >
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li className={`${isMenuOpen ? "hidden" : "block"}`}>
              <button
                onClick={handleLogout}
                className="text-cyan-500 font-semibold hover:text-orange-400"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className={`${isMenuOpen ? "hidden" : "block"}`}>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-cyan-500 font-semibold hover:text-orange-400"
                }
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
