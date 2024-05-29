import React from "react";
import chooseUsBg from "../../assets/home/chooseUs/ChooseUsBg.jpg";
import { chooseUs } from "../../Content/home";

function ChooseUs() {
  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-cover bg-center relative text-white pt-12 px-10"
        style={{ backgroundImage: `url(${chooseUsBg})` }}
      >
        <div className="h-full flex flex-col justify-center items-end">
          <div className="flex flex-col items-end justify-center">
            <h3 className="w-1/2 text-center text-cyan-600 font-bold pb-8">
              {chooseUs.subtitle}
            </h3>
            <h1 className="w-1/2 text-center text-4xl pb-8">
              {chooseUs.title}
            </h1>
            <p className="w-1/2 text-left text-base px-8 pb-8">
              {chooseUs.description}
            </p>
          </div>
          <div className="w-1/2 grid grid-cols-2 px-10 gap-4 py-10 ">
            {chooseUs.cards.map((card, index) => (
              <div className="flex items-center justify-start gap-2 rounded-full border-2 border-cyan-800  shadow-sm shadow-cyan-800 hover:text-white text-orange-800 hover:shadow-lg hover:shadow-cyan-800 transition-all duration-300 ease-in-out">
                <img
                  src={card.image}
                  alt={card.title}
                  className="bg-slate-800 rounded-full px-2 py-2 w-16"
                />
                <h2 className="text-lg text ">{card.title}</h2>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start w-1/2 px-10">
            <button className="text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg  border-b border-blue-500 font-medium rounded-full px-5 py-2.5 text-center transition-all duration-300 ease-in-out">
              Explore Classes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
