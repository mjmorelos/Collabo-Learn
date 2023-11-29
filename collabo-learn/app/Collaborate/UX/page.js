"use client";

import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';

const UXIWorkSpaceStyle = {
  flexDirection: 'column',
  backgroundColor: '#99C2CF',
  minHeight: '100vh',
  width: '100%',
};

const screenStyle = {
  display: 'flex',
  flex: '1',
  gap: '2rem',
};

export default function UXI() {
  return (
    <div className="Mobile" style={UXIWorkSpaceStyle}>
      <div style={screenStyle}>
        <Navbar />
        <div className="content" style={UXIWorkSpaceStyle}>
          <Sidebar />
          {/* Rest of the content goes here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
