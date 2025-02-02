"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Product } from "../../../types/product";
import { client } from "@/utils/sanity";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter(); 

  // Fetch products from Sanity
  const fetchProducts = async () => {
    const query = `*[_type == "product"]{
      _id,
      name,
      price,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      category,
      slug
    }`;
    const products = await client.fetch(query);
    return products;
  };

  // Handle the search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(e.target.value.length > 0); // Show suggestions if there's input
  };

  // Trigger search function
  const triggerSearch = async () => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    // Fetch all products
    const products = await fetchProducts();
    const filtered = products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle product click for dynamic routing
  const handleProductClick = (slug: string) => {
    router.push(`/product/${slug}`); 
    setSearchQuery(""); 
    setIsDropdownOpen(false); 
  };

  return (
    <div className="h-[60px] bg-white max-w-[1920px] flex justify-center relative mb-3">
      <div className="w-full px-4   max-w-[1177px] flex items-center justify-between lg:justify-center">
        {/* Logo */}
        <Link href="/" className="hover:text-[#FB2E86]">
          <div className="text-2xl font-bold text-[#0D0E43] mr-[44px] xl:mr-[88px]">
            AYZEL IQBAL
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden relative z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-[#0D0E43] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <div className="text-3xl">X</div> 
            ) : (
              <div className="text-3xl">☰</div> 
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white lg:static lg:w-auto lg:flex text-[#0D0E43] font-normal z-40`}
        >
          <div className="flex flex-col items-center lg:flex-row lg:space-x-6 lg:items-center relative mr-[100px] xl:mr-[200px]">
            <Link href="/" className="hover:text-gray-600 hover:underline ">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-600 hover:underline">
              About
            </Link>
            <Link href="/products" className="hover:text-gray-600 hover:underline">
              Products
            </Link>
            <Link href="/blogpage" className="hover:text-gray-600 hover:underline">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-gray-600 hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-gray-600 hover:underline">
              Contact
            </Link>
            
          </div>

          {/* Search Bar Inside Hamburger Menu */}
          <div className="relative w-full max-w-[400px] flex mt-4 mx-auto  mb-3 lg:mb-0">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  triggerSearch();
                }
              }}
            />
            <button
              className="ml-2 py-2 px-4 bg-black  text-white rounded-lg hover:bg-gray-500 hover:text-black" 
              onClick={triggerSearch}
            >
              <IoSearchOutline className="text-white text-lg" />
            </button>

            {/* Search Suggestions Dropdown */}
            {isDropdownOpen && filteredProducts.length > 0 && (
              <div className="absolute top-[40px] left-0 right-0 z-50 bg-white border-2 border-gray-300 shadow-lg max-h-[300px] overflow-y-auto">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="p-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleProductClick(product.slug.current)}
                  >
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm text-gray-500">Price: ${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


