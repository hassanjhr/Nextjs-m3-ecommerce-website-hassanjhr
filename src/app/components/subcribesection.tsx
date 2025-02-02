"use client";

import React from "react";

import Link from "next/link";
import Cover from "../assets/cover.jpg";

const SubscribeSection = () => {
  return (
    <div
      className=" my-14 h-[300px] sm:h-[462px] max-w-[1920px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Cover.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 max-w-[574px]">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <Link href="/products"><button className="bg-gradient-to-r from-black to-[#FB2E86] font-semibold lg:h-[49px] lg:w-[173px] mt-[10px] text-white px-6 py-2  text-[17px] hover:bg-[#e0226f] transition">
          Shop Now
        </button></Link>
      </div>
    </div>
  );
};

export default SubscribeSection;
