"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Footer() {

    const [showFooter, setShowFooter] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;

        if (windowHeight + scrolled >= fullHeight) {
          setShowFooter(true);
        } else {
          setShowFooter(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    }, []);
  
    return (
      <div>
        <footer 
          style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent:'space-between', 
            backgroundColor: '#022434', 
            padding: '20px 40px', 
            color: 'white',
            position: showFooter ? 'fixed': 'relative',
            bottom: 0,
            left: 0,
            right: 0,
          }}>

          <div className="flex space-x-4 mb-4">
            {/* Placeholder for social icons */}
            <a href="#Social" className="hover:underline text-white">Socials</a>
            <a href="#" className="text-white">
              <img src="https://i.postimg.cc/W3Ch1B9n/facebook.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <img src="https://i.postimg.cc/Y95CH19D/instagram.png" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <img src="https://i.postimg.cc/3wW80L0b/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <img src="https://i.postimg.cc/LX1mNnTt/youtube.png" alt="Youtube" className="h-6 w-6" />
            </a>
          </div>
          <div className="space-x-4">
            <Link href="/About" className="hover:underline">
              About Us</Link>
            <a href="#careers" className="hover:underline text-white">Careers</a>
            <a href="#careers" className="hover:underline text-white">Support</a>
          </div>
          <div className="text-sm text-white">
            Copyright © 2023 Collabo-Learn<br/> All rights reserved.
          </div>
        </footer>
      </div>
    );
};
