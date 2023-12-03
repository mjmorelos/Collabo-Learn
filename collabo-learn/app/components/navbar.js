"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { authenticateMockUser } from "./mock-auth";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isCollaborateDropdownOpen, setCollaborateDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isPopupActive, setPopupActive] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const handleSignIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const authenticatedUser = authenticateMockUser(email, password);

    if (authenticatedUser) {
      alert(`Welcome, ${authenticatedUser.name}!`);
      setUserDropdownOpen(false);
      setAuthenticatedUser(authenticatedUser);
      setPopupActive(false);
    } else {
      alert("Incorrect email/password. Try Again.");
    }
  };

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

  const handleCollaborateClick = () => {
    setCollaborateDropdownOpen(!isCollaborateDropdownOpen);
  };

  const handleUserClick = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  useEffect(() => {
    const popupElement = document.querySelector(".popup");
    const closeBtnElement = document.querySelector(".popup .close-btn");

    const handlePopupCloseClick = () => {
      popupElement.classList.remove("active");
      setPopupActive(false); 
    };

    if (closeBtnElement && popupElement) {
      closeBtnElement.addEventListener("click", handlePopupCloseClick);

      return () => {
        closeBtnElement.removeEventListener("click", handlePopupCloseClick);
      };
    }
  }, []);

  const userIconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'absolute',
    top: '26px',
    right: '50px',
    transition: 'all 0.2s ease-in-out',
  };

  const dropdownStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #4A90E2',
    padding: '1rem',
    borderRadius: '0.25rem',
    display: isUserDropdownOpen ? 'block' : 'none',
    zIndex: '100',
  };

  return (
    <nav className={`fixed top-0 w-full flex justify-between items-center py-4 px-6 shadow-md bg-white text-black ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div>
        <Link href="/">
          <Image
            src="/resources/logo.png"
            alt="Logo"
            width={120}
            height={120}
            style={{ cursor: 'pointer', marginLeft: "5rem" }}
          />
        </Link>
      </div>
      <div>
        <Image
          src="/resources/user.png"
          alt="User"
          width={40}
          height={40}
          className={`${isUserDropdownOpen ? 'bg-teal-500 text-white' : ''}`}
          onClick={handleUserClick}
          style={userIconStyle}
        /> 
        {authenticatedUser && (
          <div className="absolute top-14 right-11">
            <p style={{ marginTop: '12px'}}>{`Hi, ${authenticatedUser.name}!`}</p>
          </div>
        )}
        {isUserDropdownOpen && (
          <div className="absolute top-16 right-0" style={dropdownStyle}>
            {authenticatedUser ? (
              <>
                <Link href="/User/EditProfile" className="hover:underline block">
                  Edit Profile
                </Link>
                <button
                  onClick={() => {
                    setUserDropdownOpen(false);
                    setAuthenticatedUser(null); 
                    setPopupActive(false); 
                  }}
                  className="hover:underline block"
                  style={{ marginBottom: '8px' }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    const popupElement = document.querySelector(".popup");
                    if (popupElement) {
                      popupElement.classList.add("active");
                      setPopupActive(true);
                    }
                  }}
                  className="hover:underline block"
                  style={{ marginBottom: '8px' }}
                >
                  Log In
                </button>
                <div className={`popup ${isPopupActive ? 'active' : ''}`}>
                  <div className="close-btn">&times;</div>
                  <div className="form">
                    <h2>Log In</h2>
                    <div className="form-element">
                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" placeholder="enter email" />
                    </div>
                    <div className="form-element">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" placeholder="enter password" />
                    </div>
                    <div className="form-element">
                      <input type="checkbox" id="remember-me" />
                      <label htmlFor="remember-me">Remember Me</label>
                    </div>
                    <div className="form-element">
                      <button onClick={handleSignIn}>Sign in</button>
                    </div>
                    <div className="form-element">
                      <a href="#" onClick={handleSignIn}>Sign In with Github</a>
                    </div>
                  </div>
                </div>
                <Link href="/User/signup" className="hover:underline block" style={{ marginBottom: '8px' }}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
        
      </div>
      <div className="space-x-4 flex items-center" style={{ marginTop: '80px', marginBottom: '30px' }}>
        <div className="flex space-x-8" style={{ marginRight: '20px' }}>
          <Link href="/">
            <button className={`border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out`}>
              Home
            </button>
          </Link>
          <Link href="FindTutor">
            <button className={`border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out`}>
              Find a tutor
            </button>
          </Link>
          <Link href="ProjectSample">
            <button className={`border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out`}>
              Sample Projects
            </button>
          </Link>
        </div>
        <div className="relative" style={{ marginRight: '20px' }}>
          <button
            className={`border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${
              isCollaborateDropdownOpen ? 'bg-teal-500 text-white' : ''
            }`}
            onClick={handleCollaborateClick}
          >
            Collaborate
          </button>
          {isCollaborateDropdownOpen && (
            <div className="absolute top-full left-0 bg-white border border-teal-500 p-3 rounded-md space-y-5">
              <Link href="/Collaborate/Web" className="hover:underline block">Web</Link>
              <Link href="/Collaborate/UX" className="hover:underline block">UI/UX</Link>
              <Link href="/Collaborate/Mobile" className="hover:underline block">Mobile</Link>
              <Link href="/Collaborate/AI" className="hover:underline block">Machine Learning</Link>
              <Link href="/Collaborate/Database" className="hover:underline block">Database</Link>
              <Link href="/Collaborate/Language" className="hover:underline block">Language Specific</Link>
              <Link href="/Collaborate/IOT" className="hover:underline block">Internet of Things</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );  
}