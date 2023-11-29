"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Sidebar from '@/app/components/sidebar';

const Database = () => {
  return (
    <div className="Database" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <Sidebar />

    <Footer />
  </div>
  );
};

export default Database;
