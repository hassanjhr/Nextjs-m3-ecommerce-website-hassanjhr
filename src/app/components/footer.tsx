import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black pb-6 ">
      
       

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col lg:flex-row items-center justify-around text-sm md:text-base text-white">
          {/* Copyright */}
          <p className="text-center lg:text-left">
            ©Ayzel Iqbal - All Rights Reserved
          </p>
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link
              href="https://facebook.com"
              target="_blank" className="bg-gray-500 text-white p-2 rounded-full flex items-center justify-center text-sm"
            >
              <FaFacebookF size={10} />
            </Link>
            <Link
              href="https://instagram.com" target="_blank"
              className="bg-gray-500 text-white p-2 rounded-full flex items-center justify-center text-sm"
            >
              <FaInstagram size={10} />
            </Link>
            
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
