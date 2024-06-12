import React from "react";
import Logo from "../assets/logo/Logo.png";
import { footer } from "../Content/footer.js";

function Footer() {
  return (
    <div className=" bg-gradient-to-r from-black via-slate-950 to-cyan-950 text-white flex justify-center items-start py-10 px-10">
      <div className="flex flex-col items-start justify-center mx-auto w-1/3">
        <div className="flex items-center justify-start px-10 pb-5">
          <img
            className="w-20 mr-2"
            src={footer.col1Data[0].image}
            alt="Logo"
          />
          <h1 className="text-xl">{footer.col1Data[1].title}</h1>
        </div>
        <div className="flex flex-col items-start justify-center px-10">
          <p className="pb-5">{footer.col2Data[0].description}</p>
          <div className="flex pb-5">
            {footer.col2Data[1].images.map((image, index) => (
              <div className="w-11 h-11 rounded-full bg-slate-500 cursor-pointer hover:bg-cyan-500 transition-all ease-in-out duration-300 hover:scale-105 flex items-center justify-center mx-1">
                <img className="w-5" src={image} alt="" />
              </div>
            ))}
          </div>
          <input
            type="email"
            className="bg-white w-full px-4 py-2 rounded-full mb-2 md:flex-row  focus:outline-none"
            placeholder="Your Email Address"
          />
          <button className="text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg  border-b border-blue-500 font-medium rounded-full px-4 py-2 text-center transition-all duration-300 ease-in-out w-full">
            Subscribe to our Newsletter
          </button>
        </div>
      </div>
      <div className="mx-auto mt-7 w-1/5 flex flex-col items-center justify-center">
        <h2 className="text-xl uppercase font-semibold pb-5 underline underline-offset-8 decoration-orange-600">
          {footer.col3Data[0].title}
        </h2>
        <ul>
          {footer.col3Data[0].list.map((item, index) => (
            <li className="pb-1 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-7 w-1/5 flex flex-col items-center justify-center">
        <h2 className="text-xl uppercase font-semibold pb-5 underline underline-offset-8 decoration-orange-600">
          {footer.col4Data[0].title}
        </h2>
        <ul>
          {footer.col4Data[0].list.map((item, index) => (
            <li
              className={`${
                index % 2 !== 0 ? "mb-5" : "mb-1 font-semibold text-cyan-500"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-7 w-1/5 flex flex-col items-center justify-center">
        <h2 className="text-xl uppercase font-semibold pb-5 underline underline-offset-8 decoration-orange-600">
          {footer.col5Data[0].title}
        </h2>
        <ul>
          {footer.col5Data[0].list.map((item, index) => (
            <li
              className={`${index == 3 ? "mb-5" : "mb-1 "} ${
                index > 3 ? "hover:underline hover:text-orange-500" : ""
              } cursor-pointer`}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="pt-5">{footer.col2Data[2].description}</p>
      </div>
    </div>
  );
}

export default Footer;
