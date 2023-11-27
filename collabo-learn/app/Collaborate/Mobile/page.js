"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Mobile = () => {
  return (
    <div className="Mobile" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <p>This is the Mobile page</p>

    <Footer />
  </div>
  );
};

export default Mobile;
