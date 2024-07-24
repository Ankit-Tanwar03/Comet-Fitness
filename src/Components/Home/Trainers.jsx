import React from "react";
import { trainers } from "../../Content/home";
import BGImage from "../../assets/home/about/AboutBg.jpg";

function Trainers() {
  return (
    <>
      <div
        className="bg-cover bg-right-top bg-no-repeat min-h-screen p-4 sm:p-8 md:p-12"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="text-center pb-8 md:pb-12">
          <h3 className="font-bold text-cyan-600 pb-4 md:pb-6">
            {trainers.subtitle}
          </h3>
          <h1 className="text-2xl md:text-4xl font-semibold pb-4 md:pb-8">
            {trainers.title}
          </h1>
          <p className="text-base md:text-lg">{trainers.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          {trainers.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500 overflow-hidden min-h-[400px] max-w-72 border-b border-r border-cyan-800 mx-auto"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full  object-cover object-center transition-all hover:scale-105 ease duration-300 hover:grayscale-0"
              />
              <div className="p-4 md:p-6 flex flex-col items-center justify-center">
                <p className="text-lg md:text-2xl font-semibold mb-2">
                  {card.name}
                </p>
                <p className="text-sm md:text-lg text-black mb-4">
                  {card.designation}
                </p>
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-facebook text-cyan-500 hover:text-orange-600 hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram text-cyan-500 hover:text-orange-600 hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-x text-cyan-500 hover:text-orange-600 hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail text-cyan-500 hover:text-orange-600 hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-bold text-cyan-600 pb-2 text-center mt-16">
            {trainers.partnersTitle}
          </h3>
          <div className="flex justify-around items-center flex-wrap">
            {trainers.logos.map((logo, index) => (
              <div key={index} className="m-4">
                <img
                  src={logo.image}
                  alt="logo-image"
                  className="w-24 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainers;
