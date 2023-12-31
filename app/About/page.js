"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const mediaScrollerStyle = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '21%',
  gap: '2rem',
  overflowX: 'auto',
  overscrollBehaviorInline: 'contain',
  padding: '0 var(--spacer) var(--spacer)',
};

const mediaScrollerItemStyle = {
  display: 'grid',
  gridTemplateRows: 'min-content',
  padding: '1.5rem',
  aspectRatio: '20/15',
  objectFit: 'cover',
};

const mediaScrollerItemImgStyle = {
  inlineSize: '70%',
  aspectRatio: '30/40',
  objectFit: 'cover',
};

const FirstHalfStyle = {
  width: '100%', 
  height: '450px', 
  overflow: 'hidden', 
  backgroundColor: '#99C2CF', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
};

const SecondHalfStyle = {
  marginTop: '1rem', 
  color: '#4D4D4D', 
  fontSize: '23px', 
  fontFamily: 'Anonymous Pro', 
  lineHeight: '3', 
  textAlign: 'center'
};

export default function About() {
  return (
    <div className="About" style={{ backgroundColor: 'white', minHeight: '100%' }}>
      <br /><br /><br /><br /><br />
      <Navbar />
      <div style={FirstHalfStyle}>        
        <div style={{ color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '1.6', textAlign: 'center' }}>
          <strong>About Us</strong><br/><br/>
          We are a team of third-semester software development students passionate about leveraging our skills and creativity to make a meaningful impact in Calgary&apos;s fast-growing tech industry.<br/>
          Our goal is not just to learn but to actively contribute, crafting solutions that address real-world challenges while embracing the dynamic spirit of Calgary&apos;s tech community.
        </div>
      </div>
      <div style={SecondHalfStyle}>
        <div style={{ color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro',}}>
        <strong>Our Team</strong><br/><br/>
          <div style={mediaScrollerStyle} className="media-scroller">
            <div style={mediaScrollerItemStyle} className="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="/resources/Mark.jpg" alt="Mark" />
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="/resources/Sha.jpg" alt="Sha" />
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="/resources/Lance.jpg" alt="Lance" />
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="/resources/Dom.jpg" alt="Dom" />
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="/resources/Ruth.jpg" alt="Ruth" />
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="/resources/Vincent.jpg" alt="Vincent" />
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="/resources/Abdul.jpg" alt="Abdul" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
