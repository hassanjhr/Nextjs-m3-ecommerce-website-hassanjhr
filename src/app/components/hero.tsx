"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/logo_Ayzel.png";
import Dress from "@/app/assets/Dress_01-removebg-preview.png";

const HeroSection = () => {
  return (
    <div className=" bg-rose-200 py-12 ">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:justify-start">
        {/* Logo Section */}
        <div className="lg:w-1/3 flex justify-start lg:justify-start relative xl:mb-[70px]">
          <Image
            src={Logo}
            alt="logo"
            width={350}
            height={350}
            className="w-[220px] sm:w-[280px] lg:w-[350px] -mt-11 lg:-mt-20"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/3 text-left lg:text-left mt-6 lg:mt-0 flex flex-col items-center lg:items-start lg:ml-[-100px]">
         
          <h1 className="text-gradient-to-r  text-2xl sm:text-3xl lg:text-4xl mt-2 leading-tight md:ml-10">
            New  Collection 2024
          </h1>
          <p className="text-[#9196AA] text-xs sm:text-sm lg:text-base mt-4 leading-relaxed">
            
          </p>
          <Link href="/products"><button   className='bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4 md:ml-10'>
            Shop Now
          </button></Link>
        </div>

        {/* Dress Section */}
        <div className="lg:w-1/3 flex justify-center relative mt-8 lg:mt-0 lg:ml-[10px]">
          <Image
            src={Dress}
            alt="Dress"
            width={700}
            height={700}
            className="w-[320px] sm:w-[450px] lg:w-[700px]"
          />
          {/* Discount Tag */}
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;
