import React, { useState, useEffect } from "react";
import AllBanner from "../Components/AllBanner";
import { blogData } from "../Content/blog.js";

import Discount from "../assets/schedule/Discount.jpg";
import Supplements from "../assets/schedule/Supplements.jpg";
import YogaAd from "../assets/schedule/YogaAd.jpg";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

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
      <AllBanner title="Our Blog" />
      <div className="bg-gradient-to-br from-black via-slate-950 to-cyan-950 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-2/3 mb-8 md:mb-0 flex flex-col items-center justify-center">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="mb-8 w-4/5 bg-gradient-to-br from-black via-slate-950 to-cyan-950 border-2 border-white shadow-[0_0px_60px_-15px] shadow-white rounded-bl-3xl rounded-tr-3xl transition-transform duration-300 "
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 md:h-64 lg:h-auto object-cover rounded-tr-3xl rounded-bl-2xl"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-cyan-500 mb-2 md:mb-4">
                    {blog.title}
                  </h3>
                  <p className="text-white mb-2 md:mb-4">{blog.description}</p>
                  <div className="text-white text-sm">
                    Category: {blog.category}
                  </div>
                </div>
                <div className="px-4 pb-6">
                  <button className="text-md text-white bg-orange-600 shadow-orange-500/50 hover:shadow-orange-500 shadow-md hover:shadow-lg border-b border-orange-500 font-medium rounded-full px-8 py-2.5 text-center transition-all duration-300 ease-in-out">
                    Read More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-8">
              No blogs available for the selected category.
            </div>
          )}
        </div>

        <div className="w-full md:w-1/3 space-y-8">
          <div className="mb-8">
            <h2 className="text-xl text-white font-semibold mb-4">
              Categories
            </h2>
            <select
              onChange={handleCategoryChange}
              className="w-full text-lg bg-slate-800 text-white border border-white rounded-full py-2 px-4"
              value={selectedCategory}
            >
              <option value="All">All Categories</option>
              <option value="Body Building">Body Building</option>
              <option value="CrossFit">CrossFit</option>
              <option value="Yoga">Yoga</option>
              <option value="Zumba">Zumba</option>
              <option value="Meditation">Meditation</option>
            </select>
          </div>

          <div className="space-y-8">
            <div className="bg-white border-2 border-white rounded-lg shadow-lg">
              <img
                src={Discount}
                alt="Ad 1"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg px-4 font-semibold text-slate-800 mb-2">
                Join Our Fitness Program
              </h3>
              <p className="text-gray-600 px-4 pb-4">
                Sign up today and get a 50% discount on your first month!
              </p>
            </div>
            <div className="bg-white border-2 border-white rounded-lg shadow-lg">
              <img
                src={Supplements}
                alt="Ad 2"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg px-4 font-semibold text-slate-800 mb-2">
                Buy One Get One Free
              </h3>
              <p className="text-gray-600 px-4 pb-4">
                Special offer on all our gym accessories and supplements.
              </p>
            </div>
            <div className="bg-white border-2 border-white rounded-lg shadow-lg">
              <img
                src={YogaAd}
                alt="Ad 3"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg px-4 font-semibold text-slate-800 mb-2">
                Join Our Yoga Classes
              </h3>
              <p className="text-gray-600 px-4 pb-4">
                Experience tranquility and fitness with our expert-led yoga
                sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
