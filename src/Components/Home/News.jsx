import React from "react";
import { news } from "../../Content/home";
import BGImage from "../../assets/home/about/AboutBg.jpg";

function News() {
  return (
    <>
      <div
        className="bg-cover bg-right-top bg-no-repeat min-h-screen p-4 sm:p-12"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="text-center pb-8 sm:pb-12">
          <h3 className="font-bold text-cyan-600 pb-4 sm:pb-6 text-lg sm:text-xl">
            {news.subtitle}
          </h3>
          <h1 className="text-2xl sm:text-4xl font-semibold pb-4 sm:pb-8">
            {news.title}
          </h1>
          <p className="text-sm sm:text-lg">{news.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {news.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500 overflow-hidden min-h-[400px] max-w-full mx-auto flex flex-col"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full object-cover object-center transition-all hover:scale-105 ease duration-300"
              />
              <div className="flex-1 p-4 sm:p-6 flex flex-col items-center">
                <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-4 bg-cyan-600 text-center rounded-full px-4 sm:px-6 py-1 bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 border-b-2 border-cyan-600">
                  {card.date}
                </p>
                <p className="text-lg sm:text-xl font-semibold mb-2">
                  {card.title}
                </p>
                <p className="text-xs sm:text-sm text-black mb-4 flex-1">
                  {card.content}
                </p>
                <div className="flex flex-col space-y-4 mt-auto w-full">
                  <div className="mx-auto">
                    <button className="text-sm sm:text-md text-slate-800 bg-gradient-to-tr from-slate-50 via-orange-300 to-orange-600 shadow-orange-500/50 hover:shadow-orange-500 shadow-lg hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-6 sm:px-8 py-2 text-center transition-all duration-300 ease-in-out">
                      Read More
                    </button>
                  </div>
                  <div className="flex space-x-4 pt-4 justify-center items-center">
                    <p className="text-xs sm:text-sm">Share:</p>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
