import React from "react";
import { NavLink } from "react-router-dom";
import Boxing from "../../assets/home/classes/Boxing.jpg";
import Yoga from "../../assets/home/classes/Yoga.jpg";
import Zumba from "../../assets/home/classes/Zumba.jpg";
import Crossfit from "../../assets/home/classes/Crossfit.jpg";
import Workout from "../../assets/home/classes/Workout.jpg";
import Cardio from "../../assets/home/classes/Cardio.jpg";

function Classes() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-950 via-white to-slate-950 min-h-screen text-white py-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32">
        <div className="text-center">
          <h3 className="pb-8 text-black font-bold">Our Featured Classes</h3>
          <h1 className="text-4xl">We Are Offering Best Flexible Classes</h1>
        </div>
        <div>
          <div className="gap-4 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
            <div className="relative lg:col-span-3">
              <div
                style={{ backgroundImage: `url(${Boxing})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">
                  Kickboxing
                </p>
                <p className="m-4 px-2 bg-orange-500">
                  Sunday 04:00 PM - 04:55 PM
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-3">
              <div
                style={{ backgroundImage: `url(${Yoga})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">Yoga</p>
                <p className="m-4 px-2 bg-orange-500">
                  Saturday 09:00 AM - 09:55 AM
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-6">
              <div
                style={{ backgroundImage: `url(${Zumba})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-top bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">Zumba</p>
                <p className="m-4 px-2 bg-orange-500">
                  Monday 10:00 AM - 10:55 AM
                </p>
              </div>
            </div>
          </div>
          <div className="gap-4 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
            <div className="relative lg:col-span-6">
              <div
                style={{ backgroundImage: `url(${Cardio})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-top bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">HIIT</p>
                <p className="m-4 px-2 bg-orange-500">
                  Friday 11:00 AM - 10:55 AM
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-3">
              <div
                style={{ backgroundImage: `url(${Crossfit})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">
                  CrossFit
                </p>
                <p className="m-4 px-2 bg-orange-500">
                  Tuesday 12:00 PM - 12:55 PM
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-3">
              <div
                style={{ backgroundImage: `url(${Workout})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">
                  Strength Training
                </p>
                <p className="m-4 px-2 bg-orange-500">
                  Wednesday 03:00 PM - 03:55 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NavLink to="/schedule">
            <button className="text-base sm:text-lg md:text-xl text-slate-800 bg-gradient-to-tr from-slate-50 via-orange-300 to-orange-600 shadow-orange-500/50 hover:shadow-orange-500 shadow-lg hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-6 sm:px-8 py-2 text-center transition-all duration-300 ease-in-out mt-10">
              Explore More Classes
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Classes;
