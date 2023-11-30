"use client";

import React from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import DiscussionBoard from '../../components/discussion-board';
import Footer from '../../components/footer';

const AIworkspaceStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#99C2CF',
  minHeight: '100vh',
  width: '100%',
};

const screenStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  backgroundColor: '#99C2CF',
  marginTop: '16rem',
  flex: '1',
};

export default function AI() {
  return (
    <div className="workspace" style={AIworkspaceStyle}>
      <Navbar />
      <div className="content" style={AIworkspaceStyle}>
        <Sidebar />
        <DiscussionBoard />
        <div style={screenStyle}>
          <div style={{
            display: 'flex',
            flex: '1',
            position: 'absolute',
            justifyContent: 'flex-right',
            alignItems: 'center',
            marginTop: '16rem',
            marginLeft: '16rem',
          }}>          
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/ad79nYk2keg?si=5lNCru7JXXIIjuuK&amp;start=76" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
              style={{
                width: '700px',
                height: '500px',
              }}>
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

