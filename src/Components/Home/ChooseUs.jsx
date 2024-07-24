import React from "react";
import chooseUsBg from "../../assets/home/chooseUs/ChooseUsBg.jpg";
import { chooseUs } from "../../Content/home";
import { NavLink } from "react-router-dom";

function ChooseUs() {
  return (
    <>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center relative text-white py-24 px-4 sm:px-10"
        style={{ backgroundImage: `url(${chooseUsBg})` }}
      >
        <div className="h-full flex flex-col justify-center items-center lg:items-end">
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <h3 className="text-center text-cyan-600 font-bold pb-4 lg:pb-8">
              {chooseUs.subtitle}
            </h3>
            <h1 className="text-center text-2xl md:text-4xl pb-4 lg:pb-8">
              {chooseUs.title}
            </h1>
            <p className="text-center lg:text-left text-sm md:text-base px-4 lg:px-8 pb-4 lg:pb-8">
              {chooseUs.description}
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 py-4 lg:py-10 px-4 lg:px-10">
            {chooseUs.cards.map((card, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 rounded-full border-2 border-cyan-800 shadow-sm shadow-cyan-800 hover:text-white text-orange-800 hover:shadow-lg hover:shadow-cyan-800 transition-all duration-300 ease-in-out"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="bg-slate-800 rounded-full p-2 w-12 md:w-16"
                />
                <h2 className="text-sm md:text-lg">{card.title}</h2>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start w-full lg:w-1/2 px-4 lg:px-10">
            <NavLink to="/classes">
              <button className="text-sm md:text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg border-b border-blue-500 font-medium rounded-full px-5 py-2.5 text-center transition-all duration-300 ease-in-out">
                Explore Classes
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
