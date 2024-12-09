"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { CiShoppingCart } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md">
      {/* Navbar Container */}
      <div className="w-full px-5 md:px-10 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href='/'>
          <h1 className="text-2xl font-bold text-gray-800">SHOP.CO</h1>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden sm:flex md:space-x-6 text-gray-800 font-bold">
            <li>
              <Link href="/products" className="hover:text-gray-900 flex gap-1 items-center">
                Shop
                <RiArrowDropDownLine className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="/commingSoon" className="hover:text-gray-900">
                On Sale
              </Link>
            </li>
            <li>
              <Link href="/commingSoon" className="hover:text-gray-900">
                New Arrival
              </Link>
            </li>
            <li>
              <Link href="/commingSoon" className="hover:text-gray-900">
                Brands
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu for Small Screens */}
          <button
            className="sm:hidden text-3xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <SearchBar />
          <CiShoppingCart className="text-3xl text-gray-800 cursor-pointer hover:text-gray-900" />
          <CgProfile className="text-3xl text-gray-800 cursor-pointer hover:text-gray-900" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-bold">
            <li>
              <Link href="/products" className="hover:text-gray-900 flex gap-1 items-center">
                Shop
                <RiArrowDropDownLine className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="/commingSoon" className="hover:text-gray-900">
                On Sale
              </Link>
            </li>
            <li>
              <Link href="/commingSoon" className="hover:text-gray-900">
                New Arrival
              </Link>
            </li>
            <li>
              <Link href="/commingSoon" className="hover:text-gray-900">
                Brands
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
