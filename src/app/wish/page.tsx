'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { getWishlistItems, removeFromWishlist } from '../actions/actions';
import Swal from 'sweetalert2';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure you want to remove this item?',
      icon: 'warning',
      text: 'This action cannot be undone',
      showCancelButton: true,
      confirmButtonText: `Yes`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist(id);
        setWishlistItems(getWishlistItems());
        Swal.fire('Item removed from wishlist', '', 'success');
      }
    });
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              {item.image && (
                <Image 
                  src={urlForImage(item.image).url()}
                  className="w-24 h-24 object-cover rounded-lg md:mr-4"
                  alt={item.name}
                  width={500}
                  height={500}
                />
              )}

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>

              <button
                onClick={() => handleRemove(item._id)}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-black to-[#FB2E86] text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
