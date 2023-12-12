"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const CollaborationHomePage = () => {
  const boxStyle = {
    flex: 1,
    minWidth: '200px',
    minHeight: '200px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '100px',
    
  };

  const buttonStyle = {
    backgroundColor: '#ff9900',
    color: 'white',
    borderRadius: '10px',
    border: '2px solid #ff9900', // Add border style here
    padding: '10px',
    cursor: 'pointer',
  };

  const h1Style = {
    color: '#14B8A6',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '30px',
  };

  const h2Style = {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '150vh', paddingTop: '200px', backgroundColor: 'white', margin: '30px 0', minHeight: '100vh'}}>
      <Navbar /> 
      {/* Top Row */}
      <h1 style={h1Style}>Choose Your Language</h1>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ ...boxStyle, backgroundColor: '#ffcc00' }}>
          <h2 style={h2Style}>Java</h2>
          <Link href="./Language/menu/Java">
          <button style={buttonStyle}>Collaborate using Java</button>
          </Link>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#3399ff' }}>
          <h2 style={h2Style}>C#</h2>
          <Link href="./Language/menu/C-sharp"><button style={buttonStyle}>Collaborate using C#</button></Link>
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ ...boxStyle, backgroundColor: '#66cc99' }}>
          <h2 style={h2Style}>Python</h2>
          <Link href="./Language/menu/Python"><button style={buttonStyle}>Collaborate using Python</button></Link>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#9966cc' }}>
          <h2 style={h2Style}>Other</h2>
          <Link href="./Language/menu/Other"><button style={buttonStyle}>See More</button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollaborationHomePage;