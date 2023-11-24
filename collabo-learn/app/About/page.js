import React from 'react';
import Navbar from '../components/navbar';

export default function About() {

    //Team Profile Section
    const Section = ({ title, description }) => {
        return (
          <div className="flex items-center p-4 border-b">
            <div className="flex-1">
              <h2 className="text-lg font-bold, font-Anonymous-Pro,">{title}</h2>
              <p>{description}</p>
            </div>
            <div className="flex-none">
              {/* Placeholder for icons */}
            </div>
          </div>
        );
      };

  return (
    //About Us content
    <div className="About" style={{ backgroundColor: 'white' }}>
      <br /><br /><br /><br /><br />
      <Navbar />    
      <div style={{ width: '100%', height: '450px', overflow: 'hidden', backgroundColor: '#99C2CF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#4D4D4D', fontSize: '23px', fontFamily: 'Anonymous Pro', lineHeight: '1.6', textAlign: 'center' }}>
          <strong>About Us</strong><br/><br/>

          We are a team of third-semester software development students passionate about leveraging our skills and creativity to make a meaningful impact in Calgary's fast-growing tech industry.<br/>

          Our goal is not just to learn but to actively contribute, crafting solutions that address real-world challenges while embracing the dynamic spirit of Calgary's tech community.
        </div>
      </div>
    <div style={{ width: '100%', height: '450px', overflow: 'hidden', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
        <div style={{ color: '#4D4D4D', fontSize: '23px', fontFamily: 'Anonymous Pro', lineHeight: '1.6', textAlign: 'center' }}>
          <strong>Our Team</strong><br/><br/>
            <div className="my-8 text-black">
            <Section
            title="Mark"
            description="Project Manager"
            />
            <Section
            title="Sha"
            description="Back-end Developer"
            />
            <Section
            title="Lance"
            description="Back-end Developer"
            />
            <Section
            title="Dom"
            description="Front-end Developer"
            />
            <Section
            title="Ruth"
            description="Front-end Developer"
            />
            <Section
            title="Abdul"
            description="Front-end Developer"
            />
            <Section
            title="Vincent"
            description="Front-end Developer"
            />
            </div>
        </div>
      </div>
    </div>
  );
};
