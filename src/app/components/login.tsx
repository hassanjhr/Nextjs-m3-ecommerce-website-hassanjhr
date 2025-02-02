"use client";

import React from "react";
import Link from "next/link";


const Login = () => {
  return (
    <div className="bg-[#F6F7FB]">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-2">My Account</h2>
          <div className="text-sm text-black">
            <Link href="/" className="hover:text-gray-400 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-gray-400">My Account</span>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="bg-white py-10">
        <div className="max-w-[400px] mx-auto bg-white shadow-md rounded-md px-6 py-8">
          <h2 className="text-2xl font-semibold text-black mb-4 text-center">Login</h2>
          <p className="text-sm text-black text-center mb-8">
            Please login using account detail below.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
            <div className="text-right">
              <a href="#" className="text-sm text-black hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-black to-[#FB2E86] text-white rounded-md py-2 font-medium text-sm hover:bg-[#e0226f] transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-[#151875] mt-4">
            Dont have an Account?{" "}
            <a href="#" className="text-[#FB2E86] hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>

    
    </div>
  );
};

export default Login;
