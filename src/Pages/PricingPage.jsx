import { React, useEffect } from "react";
import AllBanner from "../Components/AllBanner";
import Pricing from "../Components/Home/Pricing";

function PricingPage() {
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
      <div>
        <AllBanner title="Pricing" />
        <Pricing />
      </div>
    </>
  );
}

export default PricingPage;
