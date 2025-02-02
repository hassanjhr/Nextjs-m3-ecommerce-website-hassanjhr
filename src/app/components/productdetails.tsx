
"use client"; 

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage?: number;
  imageUrl: string;
  category: string;
}

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/product/${product._id}`}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt={product.name}
                    className="object-cover object-center w-full h-full block"
                    src={product.imageUrl || "/placeholder.png"}
                    layout="fill"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category.toUpperCase()}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < products.length && (
          <button
            onClick={handleLoadMore}
            className="mt-8 mx-auto flex justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;




