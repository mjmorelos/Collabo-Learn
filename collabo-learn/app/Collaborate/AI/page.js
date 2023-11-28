"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import Image from 'next/image';

export default function AI() {
  return (
    <div className="AI" style={{ backgroundColor: 'white' }}>
      <Navbar />
      <Sidebar />

      {/* Content section */}
      <div style={{
        padding: '20px', // Example padding
        minHeight: 'calc(150vh - 120px)', // Adjust height based on sidebar and footer height
      }}>
        {/* Your content goes here */}
        {/* Example Image */}
        <Image src="/your-image.jpg" alt="Your Image" width={500} height={300} />
      </div>
      
      <Footer />
    </div>
  );
}
