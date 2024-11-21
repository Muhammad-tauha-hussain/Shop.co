import React from "react";
import { MdEmail } from "react-icons/md";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-8 bg-gray-900">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-[90%] max-w-6xl mx-auto rounded-lg bg-gray-800 p-6 gap-6">
        {/* Left Section */}
        <div className="text-white">
          <h1 className="text-2xl font-semibold mb-2">Stay up-to-date with our latest offers</h1>
          <p className="text-gray-400 text-sm">
            Subscribe to our newsletter and never miss an update!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <label className="flex items-center w-full sm:w-auto bg-gray-700 px-4 py-2 rounded-lg text-gray-400">
            <MdEmail className="text-xl mr-2" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
            />
          </label>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg transition-all w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 bg-gray-800 w-[90%] mx-auto mt-8 text-white py-8">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">SHOP.CO</h1>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quae vero, dicta illo ad ducimus voluptatem
            saepe. Labore quidem facilis temporibus voluptas.
          </p>
          <div className="flex gap-4 text-2xl">
            <CiTwitter className="hover:text-blue-500 cursor-pointer" />
            <CiFacebook className="hover:text-blue-600 cursor-pointer" />
            <CiInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">Company</h1>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Work</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">Help</h1>
          <ul className="space-y-2 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">FAQ</h1>
          <ul className="space-y-2 text-sm">
            <li>Accounts</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Payment Methods</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">Resources</h1>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Press</li>
            <li>Press Releases</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4 text-center text-gray-500">
        <p>&copy; 2024 SHOP.CO - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
