import React from "react";
import HeroBG from "../../assets/home/hero/HeroBG.jpg";
import { hero } from "../../Content/home.js";

function Hero() {
  return (
    <>
      <div
        className="bg-cover bg-right-top bg-no-repeat h-screen text-white pt-24"
        style={{ backgroundImage: `url(${HeroBG})` }}
      >
        <div className="h-full w-1/2 flex flex-col justify-center items-start mx-32">
          <h1 className="text-6xl my-6 text-cyan-400">{hero.title}</h1>
          <p className="my-6 text-lg pr-20">{hero.description}</p>
          <div className="my-6">
            <button className="mr-4 my-2 text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg  border-b border-blue-500 font-medium rounded-full px-5 py-2.5 text-center transition-all duration-300 ease-in-out">
              {" "}
              Join Now
            </button>
            <button className="mr-4 my-2 text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg  border-b border-blue-500 font-medium rounded-full px-5 py-2.5 text-center transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
