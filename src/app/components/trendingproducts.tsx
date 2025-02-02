"use client";

import React, { useState, useEffect } from "react";
import { Product } from "../../../types/product";
import { client } from "@/utils/sanity";
import { fourTrending } from "@/sanity/lib/queries"; 
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const TrendingProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(fourTrending); 
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="bg-white py-14">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-8">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between h-[350px] sm:h-[300px] md:h-[350px] w-full mx-auto hover:bg-[#F8F9FB]"
            >
              <Link href={`/product/${product.slug.current}`}>
                <div className="bg-[#F5F5F7] h-[70%] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-4">
                  {product.image && (
                    <Image
                      src={urlForImage(product.image).url()}
                      alt={product.name}
                      width={270} 
                      height={180} 
                      className="max-h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Product Name and Price */}
                <div className="bg-white px-4 py-3 text-center flex-1 transition-all duration-300 ease-in-out group-hover:translate-y-4">
                  <h3 className="text-sm font-bold text-black truncate group-hover:text-[#FB2E86] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="text-sm py-2">
                    <span className="text-black group-hover:text-[#FB2E86] transition-colors duration-300">
                      {product.price}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
