'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import  Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { CgChevronRight } from 'react-icons/cg'
import { client } from '@/utils/sanity'
import Swal from 'sweetalert2'

function CheckOut() {


    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone : "",
        address : "",
        zipCode: "",
        city : "",

    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone : false,
        address : false,
        zipCode: false,
        city : false,
    })

    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("applyDiscount")
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])


    const subTotal = cartItems.reduce(
        (total, item) => total + (Number(item.price) * Number(item.stockLevel)), 0)
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormValues({
                ...formValues,
                [e.target.id]: e.target.value
             })
        }

        const validateForm = () => {
            const errors = {
                firstName : !formValues.firstName,
                lastName : !formValues.lastName,
                email : !formValues.email,
                phone : !formValues.phone,
                address : !formValues.address,
                zipCode : !formValues.zipCode,
                city : !formValues.city,
            }

            setFormErrors(errors)
            return Object.values(errors).every((error) => !error);
            
        }
        const handlePlaceOrder = async () => {
            // if (validateForm()) {
            //     localStorage.removeItem("applyDiscount");
            // }

            Swal.fire({
                title: 'Are you sure you want to place this order?',
                icon: 'question',
                text: 'This action cannot be undone',
                showCancelButton: true,
                confirmButtonText: `Yes`,
                cancelButtonText: `No`,
            }).then((result) => {
                if (result.isConfirmed) {
                    if (validateForm()) {
                        localStorage.removeItem("applyDiscount");
                    }
                    Swal.fire('Order placed successfully', '', 'success');
                } else{
                    Swal.fire('Please fill in all the required fields', '', 'error');
                }
            });


            const orderData = {
                _type : "order",
                firstName : formValues.firstName,
                lastName : formValues.lastName,
                email : formValues.email,
                phone : formValues.phone,
                address : formValues.address,
                zipCode : formValues.zipCode,
                city : formValues.city,
                cartItems : cartItems.map((item) => ({
                    _type : "reference",
                    _ref : item._id,
                })),
                subTotal: subTotal,
                discount : discount,
                total : subTotal - discount,
                orderDate : new Date().toISOString(),
            }

            try{
                await client.create(orderData);
                localStorage.removeItem("applyDiscount");

            } catch (error) {
                console.error("Error creating order:", error);
            }
        }



  return (
    <div className='min-h-screen bg-gray-50'>
        <div className='mt-6'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>

                <nav className='flex items-center gap-2 py-4'>
                    <Link href = {"/cart"}
                    className='text-[#666666] hover:text-black transition text-sm'>
                    cart
                    </Link>
                    <CgChevronRight/>
                    <span>
                        CheckOut
                    </span>

                </nav>

            </div>


        </div>

        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='bg-white border rounded-lg space-y-6 p-6'>
                    <h2 className='text-lg font-semibold mb-4 '>
                        Order Summary 
                    </h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                                
                                <div className='w-16 h-16 rounded overflow-hidden'>
                                    {item.image && (
                                        <Image
                                        src={urlForImage(item.image).url()}
                                        alt='image'
                                        width={500}
                                        height={500}
                                        className='object-cover w-full h-full'
                                        />
                                    )}

                                </div>

                                <div className='flex-1'>
                                    <h3 className='text-sm font-medium'>{item.name}</h3>
                                    <p className='text-xs text-gray-500' >Quantity : {item.stockLevel}</p>
                                </div>

                                <p>${(Number(item.price) * Number(item.stockLevel))}</p>

                            </div>
                            
                        ))
                    ) : (
                        <p className='text-xs font-medium '>Your cart is empty</p>
                    )}

                    <div className='text-right pt-4'>
                        <p className='text-sm'>
                        subTotal: <span className='font-medium'> ${subTotal}</span>
                        </p>

                        <p className='text-sm'>
                            Discount: <span className='font-medium'> ${discount}</span>
                        </p>

                        <p className='text-lg font-semibold'>
                            Total: <span> ${subTotal.toFixed(2)}</span>
                        </p>
                    </div>
                </div>

              

                {/* ............................. */}


                <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Billing Information</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
            <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formValues.firstName}
                onChange={handleInputChange}
            />
            {formErrors.firstName && (
                <p className="text-red-500 text-sm mt-1">Please enter your first name</p>
            )}
        </div>

        <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formValues.lastName}
                onChange={handleInputChange}
            />
            {formErrors.lastName && (
                <p className="text-red-500 text-sm mt-1">Please enter your last name</p>
            )}
        </div>

        <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
            <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formValues.phone}
                onChange={handleInputChange}
            />
            {formErrors.phone && (
                <p className="text-red-500 text-sm mt-1">Please enter your phone number</p>
            )}
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formValues.email}
                onChange={handleInputChange}
            />
            {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">Please enter your email</p>
            )}
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
            <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formValues.address}
                onChange={handleInputChange}
            />
            {formErrors.address && (
                <p className="text-red-500 text-sm mt-1">Please enter your address</p>
            )}
        </div>

        <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-600">Zip Code</label>
            <input
                type="text"
                id="zipCode"
                placeholder="Enter your zip code"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formValues.zipCode}
                onChange={handleInputChange}
            />
            {formErrors.zipCode && (
                <p className="text-red-500 text-sm mt-1">Please enter your zip code</p>
            )}
        </div>

        <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">City</label>
            <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formValues.city}
                onChange={handleInputChange}
            />
            {formErrors.city && (
                <p className="text-red-500 text-sm mt-1">Please enter your city</p>
            )}
        </div>
    </div>

    <button
        onClick={handlePlaceOrder}
       
        className= 'w-full bg-gradient-to-r from-black to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4'
    >
        Place Order
    </button>
</div>



                {/* .............................. */}
                

            </div>

        </div>
      
    </div>
  )
}

export default CheckOut
