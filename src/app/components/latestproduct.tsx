'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '../../../types/product';
import { client } from '@/utils/sanity';
import { six } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

const LatestProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchProduct: Product[] = await client.fetch(six);
      setProduct(fetchProduct);
    }
    fetchProduct();
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-8">
          Latest Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-[#f0e3e9] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col justify-between h-full"
            >
              <Link href={`/product/${product.slug.current}`}>
                {/* Product Image */}
                {product.image && (
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={urlForImage(product.image).url()}
                      alt={product.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                )}

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-center text-black mt-2">
                  {product.name}
                </h3>

                {/* Product Category */}
                <div className="text-center text-sm text-gray-500 mt-1">
                  <span className="font-medium">Category:</span> {product.category}
                </div>

                {/* Product Price */}
                <p className="text-center text-gray-600 text-xl font-bold mt-2">
                  ${product.price}
                </p>

                {/* Remaining Stock */}
                {product.stockLevel && (
                  <div className="text-center text-sm text-gray-500 mt-2">
                    <span className="font-medium">Remaining Stock:</span> {product.stockLevel}
                  </div>
                )}
              </Link>

              {/* Bottom Section */}
              <div className="mt-auto p-4 bg-[#ebddec] rounded-lg shadow-inner">
                <div className="flex justify-between items-center">
                  <Link href={`/product/${product.slug.current}`}>
                    <button className='bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                      View Details
                    </button>
                  </Link>

                  {/* Remaining Stock */}
                  {product.stockLevel && (
                    <span className="text-sm text-gray-700 font-semibold">
                      {product.stockLevel} Left
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;



