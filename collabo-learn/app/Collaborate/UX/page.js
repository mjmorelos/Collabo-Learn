"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const UX = () => {
  return (
    <div className="UX" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <p>This is the UX/UI page</p>

    <Footer />
  </div>
  );
};

export default UX;
