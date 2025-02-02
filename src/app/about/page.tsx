"use client";



import React from "react";
import Link from "next/link";






const AboutPage = () => {
    return (
    
            <div className="bg-[#F6F7FB]">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-semibold text-black mb-2">About Us</h2>
          <div className="text-sm text-black">
            <Link href="/" className="hover:text-gray-400 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-gray-400">About Us</span>
          </div>
        </div>
      </div>

      
{/*  */}
      {/* Shop Section */}



  <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Ayzel Iqbal - Clothing Brand
          </h1>
          <p className="text-lg text-gray-600 mt-4 mx-auto max-w-3xl">
            At Ayzel Iqbal, we create clothing that blends contemporary designs with timeless elegance. Our collections are for the modern individual who values both style and comfort.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-base">
              To become a leading clothing brand known for merging high fashion with everyday wear, empowering our customers to confidently express their unique personalities.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-base">
              To design affordable, high-quality clothing that resonates with diverse tastes and offers unparalleled comfort without compromising on style.
            </p>
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Ayzel Iqbal is more than just a clothing brand; we are a movement dedicated to making high-fashion accessible. Our designs blend casual comfort with bold, modern styles, ensuring that our customers feel confident and stylish on any occasion.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We pride ourselves on creating long-lasting, versatile pieces, paying attention to every detail to provide garments that not only look good but feel amazing to wear. Our mission is to make every customer feel their best, no matter the occasion.
          </p>
        </div>

        {/* Join Us Section */}
        <div className="bg-gray-100 py-12 px-6 sm:px-12 md:px-16 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-6">
            Join Us on Our Journey
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Ayzel Iqbal isn't just about clothes; it's about confidence, individuality, and embracing the joy of self-expression. Join our growing community and elevate your wardrobe with pieces that truly reflect who you are.
          </p>
        </div>
      </div>
    </div>

  

  <div className="h-[100px] md:h-[200px] bg-white"></div>
      


      
{/*  */}
      
    </div>


    
    )
}

export default AboutPage;