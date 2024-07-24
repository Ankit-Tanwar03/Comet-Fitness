import React from "react";
import AllBannerBg from "../assets/all/AllBannerBg.jpg";

function AllBanner({ title }) {
  return (
    <>
      <div className="relative min-h-[25vh] sm:min-h-[40vh] md:min-h-[45vh]  w-full bg-gradient-to-r from-[#030305] via-[#040001] to-[#040001] bg-cover bg-center border-b-2 border-cyan-500 shadow-md shadow-cyan-500">
        <div
          className="absolute inset-0 bg-right bg-contain  bg-no-repeat"
          style={{ backgroundImage: `url(${AllBannerBg})` }}
        ></div>
        <div className="absolute w-full flex items-center justify-center bottom-0 p-6 sm:p-8 md:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-center">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}

export default AllBanner;
