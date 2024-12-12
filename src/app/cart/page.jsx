"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { ProductsData } from "@/data/data";

const Page = () => {
  const [data, setData] = useState(ProductsData[0]);

  return (
    <div className="max-w-[90%] mx-auto h-[100vh] mt-10 sm:h-fit">
      {/* Breadcrumb */}
      <div className="flex gap-2 mb-5 text-sm">
        <Link className="flex gap-1 items-center text-black" href="./">
          Home <FaArrowRight />
        </Link>
        <span className="text-gray-500">Cart</span>
      </div>

      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

      <div className="w-full flex flex-wrap justify-between gap-5">
        {/* Left Section: Cart Items */}
        <div className="w-full lg:w-[58%] border rounded-md p-5 space-y-5">
          {/* Cart Item */}
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="flex gap-5 items-center border-b pb-5 last:border-none"
            >
              <img
                src={data.image}
                alt="product image"
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex justify-between items-start w-full">
                {/* Product Details */}
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">{data.name}</h1>
                  <p className="text-sm text-gray-600">Size: Large</p>
                  <p className="text-sm text-gray-600">Color: White</p>
                  <h5 className="text-lg font-bold text-black">${data.price}</h5>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-28 space-y-3">
                  <MdDelete
                    className="text-red-600 text-2xl cursor-pointer hover:text-red-800"
                  />
                  <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full space-x-3">
                    <button className="text-gray-600 hover:text-black">-</button>
                    <p className="font-semibold">1</p>
                    <button className="text-gray-600 hover:text-black">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Summary */}
        <div className="w-full lg:w-[38%] border rounded-md p-5">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-gray-600">Subtotal:</span>
            <span className="text-sm font-semibold">${data.price * 2}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-gray-600">Shipping:</span>
            <span className="text-sm font-semibold">$10.00</span>
          </div>
          <div className="flex justify-between border-t pt-3">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">${data.price * 2 + 10}</span>
          </div>
          <button className="mt-5 w-full bg-black text-white py-2 rounded-md hover:bg-gray-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;