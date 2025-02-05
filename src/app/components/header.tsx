"use client";

import Link from "next/link";
import React from "react";
import { IoMailOutline, IoCallOutline, IoHeartOutline, IoLogInOutline } from "react-icons/io5";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/clerk-react"; // Update the path as necessary
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-black text-white px-4 sm:py-0">
      <div className="container mx-auto max-w-[1920px] flex flex-wrap items-center justify-between lg:justify-around gap-4">
        {/* Left Section: Email and Phone */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 gap-2  lg:mb-0">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <IoMailOutline className="text-[12px] sm:text-[15px] " />
            <span className="text-[12px] sm:text-[15px] truncate ">
             info@ayzeliqbal.com
            </span>
          </div>

          {/* Phone */}
          <div className=" items-center space-x-2  hidden sm:flex">
            <IoCallOutline className="text-[12px] sm:text-[15px]" />
            <span className="text-[12px] sm:text-[15px]">
              (12345)67890
            </span>
          </div>
        </div>

        {/* Right Section: Dropdowns and Icons */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <select className="hidden md:block bg-black text-white text-[12px] sm:text-[15px] border-none outline-none rounded  py-1 cursor-pointer">
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
            <option value="french">French</option>
          </select>

          {/* Currency Dropdown */}
          <select className="hidden md:block bg-black text-white text-[12px] sm:text-[15px] border-none outline-none rounded  py-1 cursor-pointer">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pkr">PKR</option>
          </select>

          {/* Login */}
          {/* <Link href="/login"><div className="flex items-center space-x-1 cursor-pointer">
          <span className=" text-[12px] sm:text-[15px]">Login</span>
            <IoLogInOutline className="text-lg hidden sm:block" />
          </div></Link> */}
          
         

          

          {/* Wishlist */}
          <Link href="/wish"><div className=" items-center space-x-1 cursor-pointer  md:flex">
            <span className="hidden md:block text-[12px] sm:text-[15px]">Wishlist</span>
            <IoHeartOutline className="text-lg  sm:block" />
          </div></Link>

          {/* Cart Icon */}
          <Link href="/cart"><div className="p-2 cursor-pointer  md:flex "> <span className="pr-1 hidden lg:block">Cart</span>  
            <LuShoppingCart className="text-lg mt-0 lg:mt-1" />
          </div></Link>
          
          <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        <UserButton />
        </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
