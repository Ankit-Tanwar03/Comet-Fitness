import React from "react";
import { gymCards } from "../../Content/home.js";

function GymCards() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 md:gap-x-10">
        {gymCards.cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-b-cyan-900 border-b-8 border-t-cyan-900 border-t-8 flex flex-col items-center justify-center bg-black backdrop-blur-3xl opacity-80 text-white px-4 py-6 sm:px-8 sm:py-10 rounded-bl-2xl rounded-tr-2xl shadow-2xl hover:opacity-100 hover:border-b-0 hover:border-t-0 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-16 sm:w-20 pb-4"
            />
            <h1 className="text-xl sm:text-2xl pb-4 text-cyan-600">
              {card.title}
            </h1>
            <p className="text-sm sm:text-lg text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default GymCards;
