"use client"
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaSearch, FaShoppingCart, FaHeart, FaUserAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { CgChevronDown } from 'react-icons/cg';
import Link from 'next/link';
import { useState } from 'react';



    export default function NavbarDark (){
        return (
            <div>
                {/* Dark navbar */}
                <div className="grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 text-md bg-black flex-auto font-Montserrat text-white" style={{ fontSize: "" }}>
                    {/* Phone and Email Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-1 bg-black p-4 font-Montserrat text-white ">
                        {/* Phone and Email Section */}
                        <div className="col-span-1 md:col-span-2 sm:grid-cols-1 flex items-center gap-2">
                            <ul className='flex justify-center' style={{ fontSize: "10px" }}>
                                <li><FaPhoneAlt size={8} className='mt-1' /></li>
                                <li><h6 className="gap-2">(225) </h6></li>
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-2 sm:grid-cols-1 flex items-center gap-" style={{ fontSize: "10px" }}>
                            <ul className='flex justify-center'>
                                <li> <FaEnvelope size={8} className="mt-1 gap-2" /> </li>
                                <li className='gap-2'><h6>michelle.rivera@example.com</h6></li>
                            </ul>
                        </div>
                    </div>

                    {/* "Follow Us" Section */}
                    <div className=" col-span-1 md:col-span-4 sm:grid-cols-1 text-right gap-4  m-4 justify-end" style={{ color: "#FFFFFF" }}>
                        <h6>Follow Us  and get a chance to win 80% off</h6>
                    </div>
                    {/* Social Media Icons */}
                    <div className="col-span-1 md:col-span-4 sm:grid-cols-1 text-right flex justify-end gap-4 m-4">
                        <FaInstagram className="text-white hover:text-pink-500 cursor-pointer" size={16} />
                        <FaYoutube className="text-white hover:text-red-500 cursor-pointer" size={16} />
                        <FaFacebookF className="text-white hover:text-blue-700 cursor-pointer" size={16} />
                        <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" size={16} />
                    </div>
                </div>

                {/* White Navbar */}
                <div className="flex justify-between items-center p-4 bg-white shadow-md font-Montserrat">
                    {/* Logo Section */}
                    <div className="text-black font-bold text-3xl">
                        <h3>Bandage</h3>
                    </div>

                    {/* Navigation Links */}
                    <div className=" font-bold text-gray-600">
                        <ul className='flex gap-6 text-sm'>
                            <li>
                                <Link href={'/home'}>
                                    Home</Link></li>
                            <li className="flex items-center gap-2">
                                <Link href={'/productlist'}>
                                    Shop</Link>
                                <CgChevronDown className="text-gray-600" size={16} />
                            </li>
                            <li>
                                <Link href={'/about'}> About</Link></li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>
                                <Link href={'/product'}> Pages</Link></li>
                        </ul>
                    </div>

                    {/* Login / Register with Icons */}
                    <div className="flex gap-4 items-center text-sm font-bold text-gray-600">
                        <FaUserAlt className="text-gray-600 hover:text-black cursor-pointer" size={20} />
                        <button className="text-blue-500">Login</button>
                        <button className="text-blue-500">/ Register</button>
                    </div>

                    {/* Icons Section on the Right */}
                    <div className="flex gap-4 items-center">
                        <FaSearch className="text-gray-600 hover:text-black cursor-pointer" size={20} />
                        <div className="relative">
                            {/* Cart Icon wrapped inside a Link to go to the cart page */}
                            <Link href="/cart">
                                <FaShoppingCart className="text-gray-600 hover:text-black cursor-pointer" size={20} />
                            </Link>
                        </div>
                        


                        
                        <FaHeart className="text-gray-600 hover:text-black cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        );
    };

    export { NavbarDark }
