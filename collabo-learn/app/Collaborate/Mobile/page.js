"use client";

import React from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import DiscussionBoard from '../../components/discussion-board';
import Footer from '../../components/footer';

const MainWorkSpaceStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#99C2CF',
  minHeight: '80vh',
  width: '100%',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const videoContainerStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '30px',
  marginRight: '16px', 
};

const iframeStyle = {
  width: '600px',
  height: '600px',
};

export default function Mobile() {
  return (
    <div className="workspace" style={MainWorkSpaceStyle}>
      <Navbar />
      <div className="content" style={contentStyle}>
        <Sidebar />
        <DiscussionBoard />
          <div style={videoContainerStyle}>
            <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/fis26HvvDII?si=PB6B2IS3E36dVSIA" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            style={iframeStyle}>
          </iframe>
          </div>
        </div>
      <Footer />
    </div>
  );
}
