'use client'; 
import React from 'react';
import Swal from 'sweetalert2';
import { Product } from '../../../types/product';
import { addToWishlist } from '@/app/actions/actions';

interface AddToWishlistButtonProps {
  product: Product;
}

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ product }) => {
  const handleAddToWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToWishlist(product);
    Swal.fire({
      title: 'Success!',
      text: `${product.name} has been added to your wishlist.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <button
      className="rounded-full w-10 h-10 mt-5 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gradient-to-r from-black to-[#FB2E86] hover:text-white transition-all duration-200 ease-in-out"
      aria-label="Add to wishlist"
      onClick={handleAddToWishlist}
    >
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    </button>
  );
};

export default AddToWishlistButton;




