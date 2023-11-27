"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Tutor = () => {
  return (
    <div className="Tutor" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <p>This is the Find a tutor page</p>

    <Footer />
  </div>
  );
};

export default Tutor;
