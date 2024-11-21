import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ url, headings, price,id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="w-full h-[500px] relative">
        <Image 
          src={url} 
          alt={headings} 
          layout="fill" 
          className="object-cover" 
        />
      </div>
      <div className="p-4 space-y-2">
        <h1 className="text-xl font-semibold text-gray-800">{headings}</h1>
        <p className="text-lg font-bold text-gray-600">${price}</p>
        <Link href={`/products/${id}`}>
        <button className="details-btn border border-black px-7 py-4">View Details</button>
      </Link>
      </div>
    </div>
  );
}

export default Card;
