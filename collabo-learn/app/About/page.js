"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function About() {
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

  return (
    <div className="About" style={{ backgroundColor: 'white', minHeight: '150vh' }}>
      <br /><br /><br /><br /><br />
      <Navbar />
      <div style={{ 
          width: '100%', 
          height: '450px', 
          overflow: 'hidden', 
          backgroundColor: '#99C2CF', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' }}
      >
        <div style={{ color: '#4D4D4D', fontSize: '25px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'center' }}>
          <strong>About Us</strong><br/>
          We are a team of third-semester software development students passionate about leveraging our skills and creativity to make a meaningful impact in Calgary's fast-growing tech industry.<br/>
          Our goal is not just to learn but to actively contribute, crafting solutions that address real-world challenges while embracing the dynamic spirit of Calgary's tech community.
        </div>
      </div>

      <div style={{ marginTop: '5rem', marginBottom: '5rem', color: '#4D4D4D', fontSize: '25px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'center' }}>
        <strong>Our Team</strong>
        <div style={mediaScrollerStyle} className="media-scroller">
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
            <Image style={mediaScrollerItemImgStyle} src="/resources/Mark.jpg" alt="Mark" width={"145"} height={"170"} />
          </div>
          <div style={mediaScrollerItemStyle}class="media-scroller-item">
            <Image style={mediaScrollerItemImgStyle} src="/resources/Sha.jpg" alt="Sha" width={"145"} height={"170"}/>
          </div>
          <div style={mediaScrollerItemStyle}class="media-scroller-item">
            <Image style={mediaScrollerItemImgStyle} src="/resources/Lance.jpg" alt="Lance" width={"145"} height={"170"}/>
          </div>
          <div style={mediaScrollerItemStyle}class="media-scroller-item">
            <Image style={mediaScrollerItemImgStyle} src="/resources/Dom.jpg" alt="Dom" width={"145"} height={"170"}/>
          </div>
          <div style={mediaScrollerItemStyle}class="media-scroller-item">
            <Image style={mediaScrollerItemImgStyle} src="/resources/Ruth.jpg" alt="Ruth" width={"145"} height={"170"}/>
          </div>
          <div style={mediaScrollerItemStyle}class="media-scroller-item">
            <Image style={mediaScrollerItemImgStyle} src="/resources/Vincent.jpg" alt="Vincent" width={"145"} height={"170"}/>
          </div>
          <div style={mediaScrollerItemStyle}class="media-scroller-item">
            <Image style={mediaScrollerItemImgStyle} src="/resources/Abdul.jpg" alt="Abdul" width={"145"} height={"170"}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
