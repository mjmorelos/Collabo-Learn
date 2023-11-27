"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Language = () => {
  return (
    <div className="Language" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <p>This is the Language page</p>

    <Footer />
  </div>
  );
};

export default Language;
