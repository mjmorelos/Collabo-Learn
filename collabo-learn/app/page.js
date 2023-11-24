"use client";

import React from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';

// Hero component for the main banner with text and image side by side
const Hero = () => {
  return (
    <div style={{ width: '100%', height: '450px', overflow: 'hidden', backgroundColor: '#99C2CF'}}>
      <img
        src="https://i.postimg.cc/fyt2NCYS/cover-page.png"
        alt="Collaborative workspace"
        className="mr-20 w-auto"
        style={{ width: '100vw', height: '100%' }}
      />
 
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
      <Hero />
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

