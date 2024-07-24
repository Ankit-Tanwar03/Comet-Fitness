import React from "react";

function Form() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 m-6 sm:m-0 rounded-bl-3xl rounded-tr-3xl border-2 border-white overflow-hidden my-10 shadow-[0_0px_60px_-15px] shadow-white lg:h-[500px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full md:w-4/5 xl:w-full xl:h-[65vh] p-6">
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-mustard-yellow focus:border-dark-green"
                placeholder="David Miller"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-mustard-yellow focus:border-dark-green"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-3 py-2 max-h-40 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-mustard-yellow focus:border-dark-green"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-xl text-slate-800 bg-gradient-to-tr from-slate-50 via-orange-300 to-orange-600 shadow-orange-500/50 hover:shadow-orange-500 shadow-lg hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-8 py-2.5 text-center transition-all duration-300 ease-in-out">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
