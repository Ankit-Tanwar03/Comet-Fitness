import React, { useState } from "react";
import trainingGirl from "../../assets/home/BMI/trainingGirl.jpg";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [obesityLevel, setObesityLevel] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setObesityLevel("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setObesityLevel("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setObesityLevel("Overweight");
    } else {
      setObesityLevel("Obesity");
    }
  };

  return (
    <div
      className="px-4 sm:px-8 flex items-center justify-start bg-[#070707] text-white bg-contain bg-right bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${trainingGirl})` }}
    >
      <div className="w-full max-w-md sm:max-w-lg p-4 sm:p-8 bg-[#070707] rounded-lg shadow-md mx-auto sm:mx-32">
        <h2 className="text-3xl sm:text-4xl font-semibold pb-4 sm:pb-6 text-center">
          Let's Calculate Your <span className="text-orange-600">BMI</span>
        </h2>
        <h3 className="text-center pb-4 sm:pb-6">
          Easily determine your body mass index with our accurate calculation
          tool.
        </h3>
        <form onSubmit={calculateBMI} className="space-y-4 sm:space-y-6">
          <div>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height (cm)"
              className="mt-1 block w-full p-2 bg-zinc-950 border border-gray-900 text-white focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight (kg)"
              className="mt-1 block w-full p-2 bg-zinc-950 border border-gray-900 text-white focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="text-lg text-black bg-gradient-to-tr from-slate-50 via-cyan-300 to-cyan-600 hover:border-white shadow-cyan-500/50 hover:shadow-white/50 shadow-lg hover:shadow-lg border-b border-blue-500 font-medium rounded-full px-5 py-3 text-center transition-all duration-300 ease-in-out"
            >
              Calculate BMI
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-lg">
            Your BMI:{" "}
            <span className="font-semibold text-orange-600">{bmi}</span>
          </p>
          <p className="text-lg">
            Obesity Level:{" "}
            <span className="font-semibold text-orange-600">
              {obesityLevel}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMI;
