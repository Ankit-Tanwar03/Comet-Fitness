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
    `${image1}`,
    `${image2}`,
    `${image3}`,
    `${image4}`,
    `${image5}`,
    `${image6}`,
    `${image7}`,
    `${image8}`,
    `${image9}`,
    `${image10}`,
    `${image11}`,
    `${image12}`,
    `${image13}`,
    `${image14}`,
    `${image15}`,
    `${image16}`,
    `${image17}`,
    `${image18}`,
    `${image19}`,
    `${image20}`,
  ];

  return (
    <div className="">
      <div>
        <h3>Comet Fitness Gallery</h3>
        <h1>Look at your den</h1>
        <p>
          Our Gallery features how you would feel and motivate yourself to keep
          showing up for a better physique
        </p>
      </div>
      <div className="bg-gray-900 grid grid-cols-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gym Photo `}
            className=" w-80 object-cover rounded-lg gap-4"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
