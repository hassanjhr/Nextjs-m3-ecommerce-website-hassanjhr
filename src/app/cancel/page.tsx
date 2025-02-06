"use client";

import React from "react";
import Image from "next/image";

// Importing Images

import CancelOrder from "@/app/assets/Cancel-Order.png";

import Link from "next/link";

const CancelPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center relative">
      {/* Decorative Dashed Line */}
      <div className="absolute top-1/2 w-full border-t border-dashed border-gray-300 transform -translate-y-1/2"></div>

      

      

      {/* Center Content */}
      <div className="z-10 text-center">
        {/* Cancel Icon */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-[80px] h-[80px] bg-[#F7F7F7] rounded-full flex items-center justify-center">
            <Image
              src={CancelOrder}
              alt="Tick Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          Your Order Is Cancelled!
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-[#B7BACB] max-w-[600px] mx-auto mb-6">
        Your order has been canceled. Please try again with the correct details.
        </p>

        {/* Button */}
        <Link href= "/cart"><button className='bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4 md:ml-10'>
          Proceed to Cart
        </button></Link>
      </div>
    </div>
  );
};

export default CancelPage;