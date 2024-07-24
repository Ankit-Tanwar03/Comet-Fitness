import { React, useEffect } from "react";
import About from "../Components/Home/About.jsx";
import AllBanner from "../Components/AllBanner.jsx";
import History from "../Components/About/History.jsx";

function AboutPage() {
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
      <AllBanner title="About" />
      <History />
      <About />
    </>
  );
}

export default AboutPage;
