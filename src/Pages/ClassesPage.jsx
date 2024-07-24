import { React, useEffect } from "react";
import AllBanner from "../Components/AllBanner";
import Classes from "../Components/Home/Classes";

function ClassesPage() {
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
        <AllBanner title="Classes" />
        <Classes />
      </div>
    </>
  );
}

export default ClassesPage;
