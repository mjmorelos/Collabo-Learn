"use client";

import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

// main banner with text and image side by side
const Banner = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '450px', overflow: 'hidden', backgroundColor: '#99C2CF'}}>

      <img
        src="/resources/student.jpg"
        alt="Collaborative workspace"
        className="mr-20 w-auto"
        style={{ width: '40%', height: '95%' }}
      /> 
      <h1 style={{fontFamily: 'anonymous pro', color: '#4D4D4D', fontSize: '2rem'}}>Collaborate and Learn.</h1>
    </div>
  );
};
// Section component for Web Development and UX/UI sections
const Section = ({ title, description }) => {
  return (
    <div className="flex items-center p-4 border-b">
      <div className="flex-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex-none">
        {/* Placeholder for icons */}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: 'white' }}>
      <br /><br /><br /><br /><br />
      <Navbar />
      <Banner />
      <div className="my-8 text-black">
        <Section
          title="Web Development"
          description="Web development is a fascinating field that involves creating websites or web applications for the internet."
        />
        <Section
          title="UX/UI"
          description="User Experience and User Interface"
        />
      </div>
      <Footer />
    </div>
  );
};

