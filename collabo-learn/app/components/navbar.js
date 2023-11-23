"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrolledDown = prevScrollPos < currentScrollPos && currentScrollPos > 100;
  
        setVisible(!isScrolledDown);
        setPrevScrollPos(currentScrollPos);
      };
  
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
              <Link href="#collaborate-option1" className="hover:underline block">Web</Link>
              <Link href="#collaborate-option2" className="hover:underline block">UI/UX</Link>
              <Link href="#collaborate-option3" className="hover:underline block">Database</Link>
              <Link href="#collaborate-option4" className="hover:underline block">Language Specific</Link>
              <Link href="#collaborate-option5" className="hover:underline block">Networking</Link>
              <Link href="#collaborate-option6" className="hover:underline block">Mobile</Link>
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