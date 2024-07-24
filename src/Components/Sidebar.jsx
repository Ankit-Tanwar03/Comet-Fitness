import { React, useEffect } from "react";
import Discount from "../assets/schedule/Discount.jpg";
import Supplements from "../assets/schedule/Supplements.jpg";
import YogaAd from "../assets/schedule/YogaAd.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    scrollToTop();
    return () => {
      window.removeEventListener("load", scrollToTop);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-black text-white transition-transform duration-300 transform z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-full sm:w-96 p-4 z-40 overflow-auto `}
    >
      <h2 className="text-3xl font-semibold my-10">
        Offers For You
        <FontAwesomeIcon
          onClick={toggleSidebar}
          icon={faX}
          className="absolute top-16 right-4 hover:text-red transition-all ease-in-out duration-300 text-lg"
        />
      </h2>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-black via-slate-950 to-cyan-950 border-2 border-white hover:border-red hover:shadow-md hover:shadow-red transition-all ease-in-out duration-300 rounded-lg shadow-lg">
          <img
            src={Discount}
            alt="Ad 1"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg px-4 font-semibold text-cyan-400 mb-2">
            Join Our Fitness Program
          </h3>
          <p className="text-white px-4 pb-4">
            Sign up today and get a 50% discount on your first month!
          </p>
        </div>
        <div className="bg-gradient-to-br from-black via-slate-950 to-cyan-950 border-2 border-white hover:border-red hover:shadow-md hover:shadow-red transition-all ease-in-out duration-300 rounded-lg shadow-lg">
          <img
            src={Supplements}
            alt="Ad 2"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg px-4 font-semibold text-cyan-400 mb-2">
            Buy One Get One Free
          </h3>
          <p className="text-white px-4 pb-4">
            Special offer on all our gym accessories and supplements.
          </p>
        </div>
        <div className="bg-gradient-to-br from-black via-slate-950 to-cyan-950 border-2 border-white hover:border-red hover:shadow-md hover:shadow-red transition-all ease-in-out duration-300 rounded-lg shadow-lg">
          <img
            src={YogaAd}
            alt="Ad 3"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg px-4 font-semibold text-cyan-400 mb-2">
            Join Our Yoga Classes
          </h3>
          <p className="text-white px-4 pb-4">
            Experience tranquility and fitness with our expert-led yoga
            sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
