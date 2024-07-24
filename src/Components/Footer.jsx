import React from "react";
import { footer } from "../Content/footer.js";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-black via-slate-950 to-cyan-950 text-white py-10 px-4 md:px-10 flex flex-wrap justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-start justify-center mx-auto px-4 mb-8 sm:mb-0">
        <div className="flex items-center justify-start pb-5">
          <img
            className="w-16 md:w-20 mr-2"
            src={footer.col1Data[0].image}
            alt="Logo"
          />
          <h1 className="text-lg md:text-xl">{footer.col1Data[1].title}</h1>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="pb-5 text-sm md:text-base">
            {footer.col2Data[0].description}
          </p>
          <div className="flex pb-5">
            {footer.col2Data[1].images.map((image, index) => (
              <div
                key={index}
                className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-500 cursor-pointer hover:bg-cyan-500 transition-all ease-in-out duration-300 hover:scale-105 flex items-center justify-center mx-1"
              >
                <img
                  className="w-4 md:w-5"
                  src={image}
                  alt={`social-icon-${index}`}
                />
              </div>
            ))}
          </div>
          <input
            type="email"
            className="bg-white w-full px-4 py-2 rounded-full mb-2 focus:outline-none text-sm md:text-base"
            placeholder="Your Email Address"
          />
          <button className="text-sm md:text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg  border-b border-blue-500 font-medium rounded-full px-4 py-2 text-center transition-all duration-300 ease-in-out w-full">
            Subscribe to our Newsletter
          </button>
        </div>
      </div>

      <div className="w-full sm:w-1/3 md:w-1/5 flex flex-col items-center justify-start px-4 mb-8 sm:mb-0">
        <h2 className="text-lg md:text-xl uppercase font-semibold pb-5 underline underline-offset-8 decoration-orange-600">
          {footer.col3Data[0].title}
        </h2>
        <ul className="text-sm md:text-base">
          {footer.col3Data[0].list.map((item, index) => (
            <li key={index} className="pb-1 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full sm:w-1/3 md:w-1/5 flex flex-col items-center justify-start px-4 mb-8 sm:mb-0">
        <h2 className="text-lg md:text-xl uppercase font-semibold pb-5 underline underline-offset-8 decoration-orange-600">
          {footer.col4Data[0].title}
        </h2>
        <ul className="text-sm md:text-base">
          {footer.col4Data[0].list.map((item, index) => (
            <li
              key={index}
              className={`${
                index % 2 !== 0 ? "mb-5" : "mb-1 font-semibold text-cyan-500"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full sm:w-1/3 md:w-1/5 flex flex-col items-center justify-start px-4 mb-8 sm:mb-0">
        <h2 className="text-lg md:text-xl uppercase font-semibold pb-5 underline underline-offset-8 decoration-orange-600">
          {footer.col5Data[0].title}
        </h2>
        <ul className="text-sm md:text-base">
          {footer.col5Data[0].list.map((item, index) => (
            <li
              key={index}
              className={`${index === 3 ? "mb-5" : "mb-1 "} ${
                index > 3 ? "hover:underline hover:text-orange-500" : ""
              } cursor-pointer`}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="pt-5 text-sm md:text-base text-center">
          {footer.col2Data[2].description}
        </p>
      </div>
    </div>
  );
}

export default Footer;
