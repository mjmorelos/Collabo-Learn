"use client";

import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Sidebar from '@/app/components/sidebar';

const MobileWorkSpaceStyle = {
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

export default function Mobile() {
  return (
    <div className="Mobile" style={MobileWorkSpaceStyle}>
      <div style={screenStyle}>
        <Navbar />
        <div className="content" style={MobileWorkSpaceStyle}>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

