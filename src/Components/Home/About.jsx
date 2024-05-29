import React from "react";
import GymCards from "./GymCards";
import BGImage from "../../assets/home/about/AboutBg.jpg";
import CoupleImage from "../../assets/home/about/AboutImage.png";
import Trainer from "../../assets/home/about/Trainer.svg";
import Equipment from "../../assets/home/about/Equipment.svg";
import Machine from "../../assets/home/about/Machine.svg";

function About() {
  return (
    <>
      <div
        className="bg-cover bg-right-top bg-no-repeat min-h-screen p-12"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <GymCards />
        <div className="flex pt-24 w-full justify-center items-center">
          <div className="w-3/5 px-5">
            <div>
              <h3 className="text-cyan-600 font-semibold pb-8">Who We Are</h3>
              <h1 className="text-4xl pb-8">
                Take Your Health And Body To Next Level
              </h1>
              <p className="w-2/3 pb-12">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
            </div>
            <div className="flex gap-x-10 pb-8">
              <div className="flex flex-col items-center justify-center w-1/5  bg-cyan-500/50 backdrop-blur-3xl opacity-80 text-white px-4 py-8 rounded-bl-2xl rounded-tr-2xl border-b-cyan-800 border-b-2 border-t-cyan-800 border-t-2">
                <img src={Trainer} alt="" className="w-20 pb-4" />
                <h3 className="text-xl text-center font-semibold ">
                  Professional Trainers
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center w-1/5  bg-cyan-500/50 backdrop-blur-3xl opacity-80 text-white px-4  py-8 rounded-bl-2xl rounded-tr-2xl border-b-cyan-800 border-b-2 border-t-cyan-800 border-t-2">
                <img src={Equipment} alt="" className="w-20 pb-4" />
                <h3 className="text-xl text-center font-semibold ">
                  Modern Equipments
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center w-1/5  bg-cyan-500/50 backdrop-blur-3xl opacity-80 text-white px-4  py-8 rounded-bl-2xl rounded-tr-2xl border-b-cyan-800 border-b-2 border-t-cyan-800 border-t-2">
                <img src={Machine} alt="" className="w-20 pb-4" />
                <h3 className="text-xl text-center font-semibold ">
                  Fancy Machines
                </h3>
              </div>
            </div>
            <button className="mr-4 my-2 text-xl text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600  shadow-cyan-500/50 hover:shadow-cyan-500 shadow-lg hover:shadow-lg  border-b border-blue-500 font-medium rounded-full px-8 py-2.5 text-center hover:transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          <div className="w-1/3">
            <img src={CoupleImage} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;