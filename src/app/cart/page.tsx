'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
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
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Item removed from cart', '', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * Number(item.stockLevel),
      0
    );
  };

  const router = useRouter();


  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to checkout?',
      icon: 'question',
      text: 'Please review your cart before checkout',
      showCancelButton: true,
      confirmButtonText: `Yes`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Please provide payment details', 'success');
        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  async function handleCheckout(cartItems: Product[]) {

    
  Swal.fire({
    title: "Checkout?",
    icon: "question",
    text: "Please review your cart before proceeding to payment.",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.fire("Success", "Redirecting to payment...", "success");


    const response = await fetch('/api/checkout',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItems: cartItems,
      }),
    })

    const data = await response.json();
    window.location.href = data.url;
      console.log(data);
      }
    });
  }



  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              {item.image && (
                <Image 
                src = {urlForImage(item.image).url()}
                className="w-24 h-24 object-cover rounded-lg md:mr-4"
                alt= {item.name}
                width={500}
                height={500}

                />
              )}

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded-md"
                >
                  -
                </button>
                <span className="px-4 py-1 border rounded-md">{item.stockLevel}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded-md"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item._id)}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-black to-[#FB2E86] text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right">
            <h3 className="text-lg font-bold">Total: ${calculatedTotal()}</h3>
          </div>

          <div className='grid justify-center gap-2'>
          <button
            onClick={handleProceed}
            className='bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4'
          >
            Cash on Delivery
          </button>

          <button
            onClick={() => handleCheckout(cartItems)}
            className=' bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4'
          >
            Payment through card
          </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartPage;



