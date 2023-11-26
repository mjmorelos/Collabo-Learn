"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrolledDown = currentScrollPos > 100;
  
        setVisible(!isScrolledDown || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
      };

      handleScroll();
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const [isCollaborateDropdownOpen, setCollaborateDropdownOpen] = useState(false);
  
    const handleCollaborateClick = () => {
      setCollaborateDropdownOpen(!isCollaborateDropdownOpen);
    };
  
    return (
      <nav className={`fixed top-0 w-full flex justify-between items-center py-4 px-6 shadow-md bg-white text-black font-anonymous ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-xl font-semibold text-black">
          <img src="https://i.postimg.cc/FRnsYr8k/collabo-logo.png" alt="Collabo-Learn Logo" />
        </div>
        <div className="space-x-4 relative inline-block">
        <button className="border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
            <Link href="/"
            className="hover:underline">Home</Link>
          </button>
        <button
            className={`border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${
              isCollaborateDropdownOpen ? 'bg-teal-500 text-white' : ''
            }`}
            onClick={handleCollaborateClick}>
            Collaborate
          </button>
  
          {isCollaborateDropdownOpen && (
            <div className="absolute top-full left-0 bg-white border border-teal-500 p-3 rounded-md space-y-5">
              <Link href="/Collaborate/web" className="hover:underline block">Web</Link>
              <Link href="/Collaborate/uxi" className="hover:underline block">UI/UX</Link>
              <Link href="/Collaborate/mobile" className="hover:underline block">Mobile</Link>
              <Link href="/Collaborate/ai" className="hover:underline block">Machine Learning</Link>
              <Link href="/Collaborate/database" className="hover:underline block">Database</Link>
              <Link href="/Collaborate/language" className="hover:underline block">Language Specific</Link>
              <Link href="/Collaborate/iot" className="hover:underline block">Internet of Things</Link>

            </div>
          )}
          <button className="border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
            <Link href="#find-tutor" className="hover:underline">Find a tutor</Link>
          </button>
  
          <button className="border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
            <Link href="#sample-projects" className="hover:underline">Sample Projects</Link>
          </button>
        </div>
      </nav>
    );
  };