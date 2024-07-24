import React from "react";
import Image1 from "../../assets/about/history/HistoryImage1.jpg";
import Image2 from "../../assets/about/history/HistoryImage2.jpg";

function History() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-950 to-cyan-950">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-28 py-8">
        <div className="container mx-auto rounded-bl-3xl rounded-tr-3xl border-2 border-white overflow-hidden my-10 shadow-[0_0px_60px_-15px] shadow-white">
          <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8 bg-gradient-to-br from-black via-slate-950 to-cyan-950">
              <p className="text-white text-sm sm:text-base md:text-lg px-2 sm:px-4 lg:px-10">
                "Gym" is also the commonly used name for a "fitness centre" or
                health club, which is often an area for indoor recreation. A
                "gym" may include or describe adjacent open air areas as well.
                In Western countries, "gyms" often describe places with indoor
                or outdoor courts for basketball, hockey, tennis, boxing or
                wrestling, and with equipment and machines used for physical
                development training, or to do exercises.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={Image1}
                alt="History Image 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img
                src={Image2}
                alt="History Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8 bg-gradient-to-tl from-black via-slate-950 to-cyan-950">
              <p className="text-white text-sm sm:text-base md:text-lg px-2 sm:px-4 lg:px-10">
                Gymnasium apparatus like barbells, jumping boards, running
                paths, tennis-balls, cricket fields, and fencing areas are used
                for exercises. In safe weather, outdoor locations are the most
                conducive to health. Gyms were popular in ancient Greece. Their
                curricula included self-defense, gymnastics medica, or physical
                therapy to help the sick and injured, and for physical fitness
                and sports, from boxing to dancing to skipping rope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
