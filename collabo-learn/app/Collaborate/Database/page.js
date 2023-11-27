"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Database = () => {
  return (
    <div className="Database" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <p>This is the Database page</p>

    <Footer />
  </div>
  );
};

export default Database;
