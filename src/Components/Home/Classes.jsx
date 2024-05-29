import React from "react";
import BGImage from "../../assets/home/classes/ClassesBg.jpg";
import Boxing from "../../assets/home/classes/Boxing.jpg";
import Yoga from "../../assets/home/classes/Yoga.jpg";
import Zumba from "../../assets/home/classes/Zumba.jpg";
import Crossfit from "../../assets/home/classes/Crossfit.jpg";
import Workout from "../../assets/home/classes/Workout.jpg";
import Cardio from "../../assets/home/classes/Cardio.jpg";

function Classes() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-950 via-white to-slate-950 min-h-screen text-white py-12 px-32">
        <div className="text-center">
          <h3 className="pb-8 text-black font-bold">Our Featured Classes</h3>
          <h1 className="text-4xl">We Are Offering Best Flexible Classes</h1>
        </div>
        <div>
          <div className="gap-4 pt-12 grid grid-cols-12">
            <div className="relative col-span-3">
              <div
                style={{ backgroundImage: `url(${Boxing})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">Boxing</p>
                <p className="m-4 px-2 bg-orange-500">
                  Saturday 09:00 AM - 10:00 AM
                </p>
              </div>
            </div>
            <div className="relative col-span-3">
              <div
                style={{ backgroundImage: `url(${Yoga})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">Yoga</p>
                <p className="m-4 px-2 bg-orange-500">
                  Saturday 09:00 AM - 10:00 AM
                </p>
              </div>
            </div>
            <div className="relative col-span-6">
              <div
                style={{ backgroundImage: `url(${Zumba})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-top bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">Zumba</p>
                <p className="m-4 px-2 bg-orange-500">
                  Saturday 09:00 AM - 10:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="gap-4 pt-12 grid grid-cols-12">
            <div className="relative col-span-6">
              <div
                style={{ backgroundImage: `url(${Cardio})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-top bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">
                  Endurance
                </p>
                <p className="m-4 px-2 bg-orange-500">
                  Saturday 09:00 AM - 10:00 AM
                </p>
              </div>
            </div>
            <div className="relative col-span-3">
              <div
                style={{ backgroundImage: `url(${Crossfit})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">
                  Crossfit
                </p>
                <p className="m-4 px-2 bg-orange-500">
                  Saturday 09:00 AM - 10:00 AM
                </p>
              </div>
            </div>
            <div className="relative col-span-3">
              <div
                style={{ backgroundImage: `url(${Workout})` }}
                className="min-h-[300px] rounded-bl-2xl rounded-tr-2xl bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:shadow-2xl"
              ></div>
              <div className="absolute z-10 bottom-0 left-0 ">
                <p className="px-4 text-3xl font-bold text-slate-50">
                  Resistance
                </p>
                <p className="m-4 px-2 bg-orange-500">
                  Saturday 09:00 AM - 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Classes;
