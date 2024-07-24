import React from "react";
import image1 from "../../assets/home/gallery/image1.jpg";
import image2 from "../../assets/home/gallery/image2.jpg";
import image3 from "../../assets/home/gallery/image3.jpg";
import image4 from "../../assets/home/gallery/image4.jpg";
import image5 from "../../assets/home/gallery/image5.jpg";
import image6 from "../../assets/home/gallery/image6.jpg";
import image7 from "../../assets/home/gallery/image7.jpg";
import image8 from "../../assets/home/gallery/image8.jpg";
import image9 from "../../assets/home/gallery/image9.jpg";
import image10 from "../../assets/home/gallery/image10.jpg";
import image11 from "../../assets/home/gallery/image11.jpg";
import image12 from "../../assets/home/gallery/image12.jpg";
import image13 from "../../assets/home/gallery/image13.jpg";
import image14 from "../../assets/home/gallery/image14.jpg";
import image15 from "../../assets/home/gallery/image15.jpg";
import image16 from "../../assets/home/gallery/image16.jpg";
import image17 from "../../assets/home/gallery/image17.jpg";
import image18 from "../../assets/home/gallery/image18.jpg";
import image19 from "../../assets/home/gallery/image19.jpg";
import image20 from "../../assets/home/gallery/image20.jpg";

function Gallery() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
  ];

  return (
    <div className="py-12 px-4 bg-gray-900">
      <div className="text-center mb-12">
        <h3 className="text-cyan-600 font-semibold text-lg mb-2">
          Comet Fitness Gallery
        </h3>
        <h1 className="text-4xl font-bold text-white mb-4">Look at your den</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our Gallery features how you would feel and motivate yourself to keep
          showing up for a better physique
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Gym Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
