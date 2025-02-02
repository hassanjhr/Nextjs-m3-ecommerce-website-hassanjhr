"use client";

import React from "react";
import Image from "next/image";
import icon1 from "@/app/assets/free-delivery.png";
import icon2 from "@/app/assets/cashback.png";
import icon3 from "@/app/assets/premium-quality.png";
import icon4 from "@/app/assets/24-7-support.png";

const AboutFeatures = () => {
  const offers = [
    {
      id: 1,
      icon: icon1,
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 2,
      icon: icon2,
      title: "100% Cash back",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Quality Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 4,
      icon: icon4,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 mb-10">
        {/* Section Title */}
        <h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-black mb-8">
          Our Features
        </h2>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              style={{ height: "320px", width: "270px", margin: "0 auto" }} 
            >
              <div className="flex justify-center items-center h-1/2 p-4">
                <Image
                  src={offer.icon}
                  alt={offer.title}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="bg-white w-full h-1/2 px-4 pt-2 flex flex-col items-center">
                <h3 className="text-[#151875] text-sm sm:text-base md:text-lg font-bold mb-1">
                  {offer.title}
                </h3>
                <p className="text-[#9196AA] text-xs sm:text-sm leading-tight">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
