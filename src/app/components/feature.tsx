'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '../../../types/product';
import { client } from '@/utils/sanity';
import { three } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { addToCart } from '../actions/actions';
import Swal from 'sweetalert2';

const FeaturedProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchProduct: Product[] = await client.fetch(three);
      setProduct(fetchProduct);
    }
    fetchProduct();
  }, []);

// add to cart function
  const handleAddToCart = (e: React.MouseEvent, product : Product) => {
    e.preventDefault();
    Swal.fire({
      position : 'center',
      icon : 'success',
      title : `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1500
    })
    addToCart(product)
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-[#f0e3e9] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
            >

              <Link href={`/product/${product.slug.current}`} className="flex-grow">
                {/* Product Image */}
                {product.image && (
                  <Image
                    src={urlForImage(product.image).url()}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                )}

                {/* Product Name */}
                <h3 className="text-lg font-medium text-center text-black mt-4">
                  {product.name}
                </h3>

                {/* Product Price */}
                <p className="text-center text-gray-600 text-xl font-bold mt-2">
                  ${product.price}
                </p>
              </Link>

              {/* Add to Cart Button */}
              <div className="flex justify-center mt-4">
                <button 
                  className='bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <Link href="/products">
        <div className=" mx-auto flex justify-center mt-12 space-x-2 ">
  <button  className="text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-black hover:text-white">
    View More
  </button>
</div></Link>

      </div>
    </div>
  );
};

export default FeaturedProducts;





