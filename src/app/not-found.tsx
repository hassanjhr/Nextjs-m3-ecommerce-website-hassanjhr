

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Error1 from "@/app/assets/error.png";

const NotFound = () => {
  return (
    <div className="bg-[#F6F7FB] flex flex-col min-h-screen">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] max-w-[1200px] w-full px-4 py-8 mx-auto">
        <h2 className="text-xl font-semibold text-black mb-2">404 Not Found</h2>
        <div className="text-sm text-black">
          <Link href="/" className="hover:text-gray-400 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-[#B7BACB]">•</span>
          <span>Pages</span>
          <span className="mx-2 text-[#B7BACB]">•</span>
          <span className="text-gray-400">404 Not Found</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white flex-grow flex flex-col items-center justify-center">
        <Image src={Error1} alt="404 Not Found" className="w-[300px] md:w-[400px] lg:w-[500px] mb-6" />
        <h2 className="text-xl md:text-2xl font-bold text-black mb-4 text-center">
          oops! The page you requested was not found!
        </h2>
        <Link href="/">
          <button className="bg-gradient-to-r from-black to-[#FB2E86] text-white px-6 py-2 rounded-md text-sm hover:bg-[#e0226f] transition">
            Back To Home
          </button>
        </Link>
      </div>

      
    </div>
  );
};

export default NotFound;
