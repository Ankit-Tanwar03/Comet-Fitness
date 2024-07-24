import { React, useEffect } from "react";
import Gallery from "../Components/Home/Gallery.jsx";
import AllBanner from "../Components/AllBanner";

function GalleryPage() {
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
      <AllBanner title="Gallery" />
      <Gallery />
    </>
  );
}

export default GalleryPage;
