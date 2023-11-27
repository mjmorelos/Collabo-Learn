"use client";
import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Project = () => {
  return (
    <div className="Project" style={{ backgroundColor: 'white' }}>
    <br /><br /><br /><br /><br />
    <Navbar />
    <h1>This is the Project Sample page</h1>

    <Footer />
  </div>
  );
};

export default Project;
