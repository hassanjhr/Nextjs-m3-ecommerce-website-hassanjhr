"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/product";
import { client } from "@/utils/sanity";
import { two } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

const ProductFeature = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchProduct: Product[] = await client.fetch(two);
        setProduct(Array.isArray(fetchProduct) ? fetchProduct : []); 
      } catch (error) {
        console.error("Error fetching product data:", error);
        setProduct([]);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className="bg-[#f0e3e9] py-12">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {product.length > 0 ? (
          product.map((product) => (
            <div key={product._id} className="flex flex-col lg:flex-row gap-6">
              {/* Image Section */}
              <div className="relative flex justify-center">
                {product.image && (
                  <Image
                    src={urlForImage(product.image).url()}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-contain"
                  />
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col space-y-6 text-center lg:text-left">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                  {product.name}
                </h2>
                <ul className="space-y-4 text-sm sm:text-base md:text-lg text-[#9196AA]">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#FB2E86] rounded-full mr-4"></span>
                    Unique features of this product
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-black rounded-full mr-4"></span>
                    High-quality materials and design
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href={`/product/${product.slug.current}`}>
                    <button className='bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                      Add To Cart
                    </button>
                  </Link>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-black font-semibold text-sm sm:text-base">
                      {product.name}
                    </span>
                    <span className="text-black text-sm sm:text-base">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#151875]">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductFeature;
