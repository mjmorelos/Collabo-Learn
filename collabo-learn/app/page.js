"use client";

import React from 'react';
import Navbar from './components/navbar';
import Collaboration from './components/collaboration-body';
import Footer from './components/footer';
import Image from 'next/image';

const Banner = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '450px', overflow: 'hidden', backgroundColor: '#99C2CF'}}>
      <Image
        src="/resources/student.jpg"
        alt="Collaborative workspace"
        className="mr-60 w-auto"
        width= {600} 
        height= {600}
      /> 
      <h1 style={{fontFamily: 'anonymous pro', color: '#4D4D4D', fontSize: '2rem', marginLeft: '250px'}}>Collaborate and Learn.</h1>
    </div>
  );
};

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: 'white' }}>
      <br /><br /><br /><br /><br />
      <Navbar />
      <Banner />
      <Collaboration />
      <Footer />
    </div>
  );
};

