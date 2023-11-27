"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Web = () => {
  return (
    <div className="Web" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <p>This is the Web page</p>

    <Footer />
  </div>
  );
};

export default Web;
