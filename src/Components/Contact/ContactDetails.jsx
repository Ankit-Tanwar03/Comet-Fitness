import React from "react";
import { contactInfo } from "../../Content/contact.js";

function ContactDetails() {
  return (
    <>
      <div className="w-full p-4 sm:p-6 m-6 sm:m-0 rounded-bl-3xl rounded-tr-3xl border-2 border-white overflow-hidden my-10 shadow-[0_0px_60px_-15px] shadow-white max-w-screen-xl mx-auto lg:h-[500px]">
        <div className="w-full md:w-full xl:w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
            {contactInfo.title}
          </h2>
          <p className="mb-4 text-slate-400">{contactInfo.description1}</p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {contactInfo.headings.map((heading, index) => (
              <div key={index}>
                <h3 className="font-bold text-white">{heading}</h3>
                <p className="text-slate-400">{contactInfo.details[index]}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-slate-400">{contactInfo.description2}</p>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
