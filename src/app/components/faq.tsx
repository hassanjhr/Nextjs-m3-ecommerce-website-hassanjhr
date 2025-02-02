"use client";

import React from "react";
import Link from "next/link";


const Faq = () => {
  return (
    <div className="bg-[#F6F7FB]">
      {/* B Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-semibold text-black mb-2">FAQ</h2>
          <div className="text-sm text-black">
            <Link href="/" className="hover:text-gray-400 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-gray-400">Faq</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-10 ">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12">
 

  {/* Ask a Question */}
  <div
    className="bg-[#F6F7FB] shadow-md rounded-md p-8 flex flex-col"
    style={{ maxWidth: "566px", width: "100%", height: "auto", minHeight: "566px" }}
  >
    <h2 className="text-2xl font-semibold text-black mb-20">
      Ask a Question
    </h2>
    <form className="space-y-8">
      <input
        type="text"
        placeholder="Your Name*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
      />
      <input
        type="text"
        placeholder="Subject*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
      />
      <textarea
        placeholder="Type Your Message*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86] h-[150px] sm:h-[197px]"
      ></textarea>
      <button
        type="submit"
        className="w-[100px] h-[35px] sm:w-[156px] sm:h-[48px] bg-gradient-to-r from-black to-[#FB2E86] text-white  py-2 font-medium text-sm hover:bg-[#e0226f] transition"
      >
        Send Mail
      </button>
    </form>
  </div>
</div>

      </div>

      
    </div>
  );
};

export default Faq;
