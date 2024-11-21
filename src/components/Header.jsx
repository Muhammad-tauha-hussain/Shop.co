import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-[#F2F0F1] h-[100vh] w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-10">
      {/* Left Section */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="uppercase font-extrabold tracking-tighter sm:text-2xl md:text-6xl text-gray-800">
          Find Clothes That Match Your Style
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem rerum nisi optio porro quas. Reiciendis nihil expedita perferendis quia.
        </p>
        <button className="px-12 py-3 w-fit bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full relative h-full">
        <Image
          src="/headerImg.jpg"
          alt="Clothing"
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default Header
