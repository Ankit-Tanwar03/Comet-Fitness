import React, { useEffect } from "react";
import Form from "../Components/Contact/Form.jsx";
import ContactDetails from "../Components/Contact/ContactDetails.jsx";
import AllBanner from "../Components/AllBanner.jsx";

function Contact() {
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
      <AllBanner title="Contact Us" />
      <div className="p-6 md:p-8 lg:p-20 xl:p-32 bg-gradient-to-br from-black via-slate-950 to-cyan-950">
        <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-around lg:items-start gap-4">
          <ContactDetails />
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;
