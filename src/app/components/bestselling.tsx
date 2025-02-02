"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/utils/sanity";
import { lastFour } from "@/sanity/lib/queries"; 
import { Product } from "../../../types/product"; 
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const BestSelling = () => {
  const [categories, setCategories] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories: Product[] = await client.fetch(lastFour);
      setCategories(fetchedCategories);
    }
    fetchCategories();
  }, []);

  return (
    <div className="bg-white py-2">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-8">
        Best-Selling Products
        </h2>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category._id} className="flex flex-col items-center w-[250px] mx-auto">
              
              <Link href={`/product/${category.slug.current}`}>
                <div className="relative flex justify-center items-center rounded-full bg-[#F6F7FB] w-[250px] h-[250px] transition-transform hover:scale-105 border-4 border-gray-300 hover:bg-[#f0e3e9]">
                  <Image
                    src={urlForImage(category.image).url()}
                    alt={category.name}
                    className="w-[120px] h-[120px] object-contain"
                    width={120} 
                    height={120}
                  />

                  {/* Button (First Item Only) */}
                  <button className="absolute bottom-6 bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-[#06b856] transition">
                    View Shop
                  </button>
                </div>
              </Link>
              {/* Text Section */}
              <div className="text-center mt-4 w-full">
                <h3 className="text-black text-lg font-normal">{category.name}</h3>
                <span className="text-black text-sm">{category.price}</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default BestSelling;
