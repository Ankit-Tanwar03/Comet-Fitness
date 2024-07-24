import React, { useState, useEffect } from "react";
import AllBanner from "../Components/AllBanner";
import { scheduleData } from "../Content/schedule";

const generateDates = (daysCount) => {
  const datesArray = [];
  const today = new Date();

  for (let i = 0; i < daysCount; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    datesArray.push({
      day: currentDate.toLocaleDateString("en-US", { weekday: "long" }),
      date: currentDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      }),
    });
  }

  return datesArray;
};

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(generateDates(7)[0].day);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const dynamicDates = generateDates(7);
    setDates(dynamicDates);
    setSelectedDate(dynamicDates[0].day);
  }, []);

  const filteredSchedule = scheduleData.filter(
    (slot) => slot.day === selectedDate
  );

  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    scrollToTop();
    return () => {
      window.removeEventListener("load", scrollToTop);
    };
  }, []);

  return (
    <>
      <AllBanner title="Schedule" />
      <div className=" bg-gradient-to-br from-black via-slate-950 to-cyan-950 px-4 sm:px-8 xl:px-32 py-10 md:py-20">
        <div className="overflow-x-auto px-2 sm:px-8 bg-gradient-to-br from-black via-slate-950 to-cyan-950 mx-auto rounded-bl-3xl rounded-tr-3xl border-2 border-white shadow-[0_0px_60px_-15px] shadow-white py-2 z-10 md:sticky top-20 ">
          <div className="flex flex-row flex-wrap justify-around items-center ">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(date.day)}
                className={`whitespace-nowrap mx-2 sm:mx-0 my-2 text-lg text-black w-32 md:w-40 py-1 text-center gap-x-2 md:gap-x-4 ${
                  selectedDate === date.day
                    ? "text-black border border-white bg-gradient-to-bl from-slate-800 via-slate-400 to-slate-50 bg-opacity-40 rounded-full shadow-white/50 hover:shadow-white/50 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                    : "bg-gradient-to-tr from-cyan-200 via-cyan-500 to-cyan-950 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg border border-blue-500 rounded-full transition-all duration-300 ease-in-out"
                }`}
              >
                <div className="text-sm font-semibold">{date.day}</div>
                <div className="text-sm font-bold">{date.date}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 px-2 sm:px-4">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((slot, index) => (
              <div key={index} className="mb-8 w-full">
                <div className="flex justify-center">
                  <div className="w-fit text-md text-white bg-gradient-to-tr from-orange-300 via-orange-500 to-orange-800 shadow-orange-500/50 hover:shadow-orange-500 shadow-lg hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-4 sm:px-8 py-2.5 text-center transition-all duration-300 ease-in-out mb-8">
                    {slot.time}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {slot.sessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-6 border-b-cyan-900 border-b-8 border-t-cyan-900 border-t-8 flex flex-col items-center justify-center bg-white backdrop-blur-3xl opacity-80 text-white rounded-bl-2xl rounded-tr-2xl shadow-[0px_10px_20px_-5px] shadow-white hover:opacity-100 hover:border-b-0 hover:border-t-0 hover:scale-105 hover:transition-all duration-300 ease-in-out"
                    >
                      <div className="text-lg font-semibold text-blue-900 text-center">
                        {session.title}
                      </div>
                      <div className="text-gray-600 text-center">
                        {session.type}
                      </div>
                      <div className="text-gray-500 text-center">
                        {session.duration}
                      </div>
                      <div className="text-sm text-gray-400 mt-2 text-center">
                        {session.instructor}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-8">
              No sessions available for {selectedDate}.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Schedule;
