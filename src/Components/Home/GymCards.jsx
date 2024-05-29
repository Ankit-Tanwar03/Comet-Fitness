import React from "react";
import { gymCards } from "../../Content/home.js";

function GymCards() {
  return (
    <>
      <div className="flex items-center justify-center w-full gap-x-20">
        {gymCards.cards.map((card, index) => (
          <div
            key={index}
            className="w-1/4 border-b-cyan-900 border-b-8 border-t-cyan-900 border-t-8 flex flex-col items-center justify-center bg-black backdrop-blur-3xl opacity-80 text-white px-8 py-10 rounded-bl-2xl rounded-tr-2xl shadow-2xl hover:opacity-100 hover:border-b-0 hover:border-t-0 hover:scale-105 hover:transition-all duration-300 ease-in-out"
          >
            <img src={card.image} alt={card.title} className="w-20 pb-4" />
            <h1 className="text-2xl pb-4 text-cyan-600">{card.title}</h1>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default GymCards;
