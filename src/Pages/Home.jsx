import { React, useEffect } from "react";
import Hero from "../Components/Home/Hero.jsx";
import About from "../Components/Home/About.jsx";
import Classes from "../Components/Home/Classes.jsx";
import Banner from "../Components/Home/Banner.jsx";
import ChooseUs from "../Components/Home/ChooseUs.jsx";
import Trainers from "../Components/Home/Trainers.jsx";
import Pricing from "../Components/Home/Pricing.jsx";
import Gallery from "../Components/Home/Gallery.jsx";
import BMI from "../Components/Home/BMI.jsx";
import News from "../Components/Home/News.jsx";
import Banner2 from "../Components/Home/Banner2.jsx";

function Home() {
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
      <Hero />
      <About />
      <Classes />
      <Banner />
      <ChooseUs />
      <Trainers />
      <Pricing />
      <Gallery />
      <BMI />
      <News />
      <Banner2 />
    </>
  );
}

export default Home;
