import React from "react";
import { pricing } from "../../Content/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function Pricing() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-950 via-white to-slate-950 min-h-screen text-white pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-12">
          <h3 className="font-bold text-black">{pricing.subtitle}</h3>
          <h1 className="text-4xl font-semibold my-6">{pricing.title}</h1>
          <p className="text-lg">{pricing.description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between space-y-8 md:space-y-0 md:space-x-8">
          {pricing.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white text-slate-900 p-6 rounded-bl-2xl rounded-tr-2xl shadow-lg hover:shadow-2xl hover:shadow-black transition-all ease-in-out duration-300 shadow-white flex-1 relative border-t-2 border-b-2 border-cyan-950 pb-24 flex flex-col justify-between"
            >
              <h2 className="text-sm font-semibold mb-4 bg-cyan-600 text-center rounded-full px-6 py-1 absolute -top-4 left-auto bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 border-b-2 border-cyan-600">
                {card.title}
              </h2>
              <div className="flex flex-col items-center">
                <p className="text-2xl my-6">
                  {card.heading}:{" "}
                  <span className="font-semibold text-orange-600">
                    ${card.price}
                  </span>{" "}
                  per/month
                </p>
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
                  <ul className="space-y-2">
                    {card.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="pr-2 text-orange-600"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="text-md text-slate-800 bg-gradient-to-tr from-slate-50 via-orange-300 to-orange-600 shadow-orange-500/50 hover:shadow-orange-500 shadow-lg hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-8 py-2.5 text-center transition-all duration-300 ease-in-out absolute bottom-5 left-1/2 transform -translate-x-1/2">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
