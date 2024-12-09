"use client";

import Card from "@/components/Card";
import { ProductsData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [productdata, setProductdata] = useState(null); // State is null initially
  const [relatedProducts, setRelatedProducts] = useState([]); // State for related products
  const { id } = useParams(); // Getting the id parameter

  useEffect(() => {
    if (id) {
      const fetchProduct = () => {
        const detailedProduct = ProductsData.find(
          (item) => item.id === parseInt(id)
        );
        setProductdata(detailedProduct || null); // Set to null if not found
      };
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    if (productdata) {
      const relatedProductsList = ProductsData.filter(
        (item) => item.category === productdata.category && item.id !== productdata.id
      ).slice(0, 3);
      setRelatedProducts(relatedProductsList);
    }
  }, [productdata]);

  return (
    <div className="p-6 md:p-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1st div - Images */}
          <div className="flex gap-5">
            <div className="flex flex-col justify-around">
              <Image
                src={
                  productdata?.image ||
                  "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={productdata?.name || "Product image"}
                width={200}
                height={200}
                className="rounded-lg ms-4 border border-black"
              />
              <Image
                src={
                  productdata?.image ||
                  "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={productdata?.name || "Product image"}
                width={200}
                height={200}
                className="rounded-lg ms-4 border border-black"
              />
            </div>
            <div className="flex items-center">
              {productdata?.image ? (
                <Image
                  src={productdata.image}
                  alt={productdata.name}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="rounded-lg border"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                  No Image Available
                </div>
              )}
            </div>
          </div>

          {/* 2nd div - Details */}
          <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {productdata?.name || "Product Name"}
            </h1>
            <p className="text-gray-600 text-base">
              {productdata?.description || "No description available."}
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Price:{" "}
              <span className="text-green-600">
                ${productdata?.price || "N/A"}
              </span>
            </p>
            <hr />
            <h5 className="font-medium text-lg">Select Colors:</h5>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500"></div>
              <div className="w-8 h-8 rounded-full bg-green-700"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
            <hr />
            <h5 className="font-medium text-lg">Choose Size:</h5>
            <div className="flex flex-wrap gap-3">
              {productdata?.sizes.map((size, idx) => (
                <span
                  key={idx}
                  className="px-12 py-2 text-sm border rounded-lg text-gray-700 hover:bg-gray-800 hover:text-white cursor-pointer"
                >
                  {size}
                </span>
              ))}
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 bg-gray-300 text-lg font-semibold rounded">
                  -
                </button>
                <span className="text-lg font-semibold">1</span>
                <button className="px-3 py-1 bg-gray-300 text-lg font-semibold rounded">
                  +
                </button>
              </div>
              <button className="px-6 py-3 bg-black text-white font-medium rounded-lg">
                Add to Cart
              </button>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Reviews: {productdata?.reviews || "No reviews yet."}</p>
              <p>Rating: {productdata?.rating || "N/A"}</p>
              <p>Category: {productdata?.category || "N/A"}</p>
              <p>Color: {productdata?.color || "N/A"}</p>
              <p>Size: {productdata?.size || "N/A"}</p>
              <p>Brand: {productdata?.brand || "N/A"}</p>
              <p>Availability: {productdata?.availability || "N/A"}</p>
              <p>Date Added: {productdata?.dateAdded || "N/A"}</p>
              <p>Last Updated: {productdata?.lastUpdated || "N/A"}</p>
              <p>Shipping: {productdata?.shipping || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto mt-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          You might also like
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
