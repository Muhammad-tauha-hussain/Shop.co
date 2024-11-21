import Image from 'next/image';
import React from 'react';

const DressStyle = () => {
    return (
        <div className="w-[80%] mx-auto bg-gray-100 p-6 rounded-lg">
  <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
    Browse by Dress Style
  </h1>

  {/* Row 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Casual Style */}
    <div className="col-span-1 bg-white flex items-stretch rounded-2xl shadow-lg h-[200px]">
      <div className="flex-1 relative">
        <Image
          src="/casual.png"
          alt="Casual Style"
          layout="fill"
          objectFit="cover"
          className="rounded-l-2xl"
        />
      </div>
      <div className="flex-1 flex justify-center items-center p-6">
        <h1 className="text-gray-800 text-2xl font-bold">Casual</h1>
      </div>
    </div>

    {/* Formal Style */}
    <div className="col-span-2 bg-white flex items-stretch rounded-2xl shadow-lg h-[200px]">
      <div className="flex-1 relative">
        <Image
          src="/formal.png"
          alt="Formal Style"
          layout="fill"
          objectFit="cover"
          className="rounded-l-2xl"
        />
      </div>
      <div className="flex-1 flex justify-center items-center p-6">
        <h1 className="text-gray-800 text-2xl font-bold">Formal</h1>
      </div>
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {/* Formal Style */}
    <div className="col-span-2 bg-transparent flex items-stretch rounded-2xl shadow-lg h-[200px]">
      <div className="flex-1 relative">
        <Image
          src="/party.png"
          alt="Formal Style"
          layout="fill"
          objectFit="cover"
          className="rounded-l-2xl"
        />
      </div>
      <div className="flex-1 flex justify-center items-center p-6">
        <h1 className="text-gray-800 text-2xl font-bold">Formal</h1>
      </div>
    </div>

    {/* Casual Style */}
    <div className="col-span-1 bg-white flex items-stretch rounded-2xl shadow-lg h-[200px]">
      <div className="flex-1 relative">
        <Image
          src="/gym.png"
          alt="Casual Style"
          layout="fill"
          objectFit="cover"
          className="rounded-l-2xl"
        />
      </div>
      <div className="flex-1 flex justify-center items-center p-6">
        <h1 className="text-gray-800 text-2xl font-bold">Casual</h1>
      </div>
    </div>
  </div>
</div>




    );
};

export default DressStyle;
