import React from "react";
import Banner2Bg from "../../assets/home/banner2/Banner2Bg.jpg";

function Banner2() {
  return (
    <>
      <div className="relative px-8 min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#030305] via-[#030305] to-[#796672] text-white bg-cover bg-center">
        <div
          className="absolute inset-0 bg-left bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Banner2Bg})` }}
        ></div>
        <div className="relative max-w-4xl w-full p-8 rounded-lg shadow-sm ml-96">
          <h2 className="text-6xl font-semibold pb-6 text-center">
            Need a <span className="text-orange-600">Fitness Trainer</span>?
          </h2>
          <h3 className="text-center pb-6">
            Get in touch with experienced fitness trainers to get in the shape
            pf your life
          </h3>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg  border-b border-blue-500 font-medium rounded-full px-5 py-3 text-center transition-all duration-300 ease-in-out"
            >
              Contact Now
            </button>
          </div>
        </div>
        {/* <div>
        <img src={trainingGirl} alt="" />
      </div> */}
      </div>
    </>
  );
}

export default Banner2;
