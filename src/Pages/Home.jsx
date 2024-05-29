import React from "react";
import Hero from "../Components/Home/Hero.jsx";
import About from "../Components/Home/About.jsx";
import Classes from "../Components/Home/Classes.jsx";
import Banner from "../Components/Home/Banner.jsx";
import ChooseUs from "../Components/Home/ChooseUs.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Classes />
      <Banner />
      <ChooseUs />
    </>
  );
}

export default Home;
