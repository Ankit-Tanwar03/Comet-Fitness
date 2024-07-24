import React from "react";
import BannerBg from "../../assets/home/banner/BannerBg.jpg";
import Dumbell from "../../assets/home/banner/Dumbell.png";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="pb-0.5 bg-orange-500">
        <div
          className="h-48  bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${BannerBg})` }}
        >
          <div className="absolute inset-0 shadow-inner hover:shadow-inner hover:shadow-orange-600 shadow-orange-600/50 transition-all duration-300 ease-in-out">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full mx-4 sm:mx-10 lg:mx-20">
              <div className="text-center lg:text-left lg:ml-24 px-4 lg:px-0">
                <h1 className="text-white text-xl sm:text-3xl md:text-4xl pb-4">
                  We Are Always Providing{" "}
                  <span className="text-orange-600">Best Fitness</span> Service
                  For You
                </h1>
                <NavLink to="/contact">
                  <button className="text-base sm:text-lg md:text-xl text-slate-800 bg-gradient-to-tr from-slate-50 via-orange-300 to-orange-600 shadow-orange-500/50 hover:shadow-orange-500 shadow-lg hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-6 sm:px-8 py-2 text-center transition-all duration-300 ease-in-out">
                    Join with us
                  </button>
                </NavLink>
              </div>
              <img
                src={Dumbell}
                alt="Dumbell"
                className="hidden lg:block w-24 sm:w-32  mt-4 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
