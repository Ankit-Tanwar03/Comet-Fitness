import React from "react";
import BannerBg from "../../assets/home/banner/BannerBg.jpg";
import Dumbell from "../../assets/home/banner/Dumbell.png";

function Banner() {
  return (
    <>
      <div className="pb-0.5 bg-orange-500">
        <div
          className="h-48 bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${BannerBg})` }}
        >
          <div className="absolute inset-0 shadow-inner hover:shadow-inner hover:shadow-orange-600 shadow-orange-600/50 transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center h-full mx-10">
              <div className="ml-24">
                <h1 className="text-white text-4xl  pb-4">
                  We Are Always Providing{" "}
                  <span className="text-orange-600"> Best Fitness</span> Service
                  For You
                </h1>
                <button className="text-xl text-slate-800 bg-gradient-to-tr from-slate-50 via-orange-300 to-orange-600 shadow-orange-500/50 hover:shadow-orange-500 shadow-lg hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-8 py-2.5 text-center transition-all duration-300 ease-in-out">
                  Join with us
                </button>
              </div>
              <img src={Dumbell} alt="Dumbell" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
