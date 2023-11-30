"use client";

import React, {useState} from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';

const AIworkspaceStyle = {
  flexDirection: 'column',
  backgroundColor: '#99C2CF',
  minHeight: '100vh',
  width: '100%',
};

const screenStyle = {
  display: 'flex',
  flex: '1',
  gap: '2rem',
};

export default function AI() {

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
  e.preventDefault();
  setInputValue(e.target.value);
};

const handlePostClick = () => {
  if (inputValue === '') {
    alert('Please enter a question!');
  } else {
    alert('Your question has been posted!');
    setInputValue('');
  }
};

  return (
    <div className="workspace" style={AIworkspaceStyle}>
      <Navbar />
      <div className="content" style={AIworkspaceStyle}>
        <Sidebar />
        <div style={screenStyle}>
          <div style={{
            display: 'flex',
            flex: '1',
            position: 'relative',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '16rem',
            marginLeft: '16rem',
            zIndex: '100',
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
                width: '500px',
                height: '400px',
              }}>
            </iframe>
          </div>
          <div style={screenStyle}>
            <Image
              src={"/resources/mail.png"}
              alt="Mail"
              width={40}
              height={40}
              style={{
                position: 'absolute', 
                justifyContent: 'flex-end',
                top: '16rem', 
                right: '2rem',
                cursor: 'pointer',
              }}
            />
            <Image
              src={"/resources/myspace.png"}
              alt="Teams"
              width={40}
              height={40}
              style={{
                position: 'absolute', 
                justifyContent: 'flex-end',
                top: '21rem', 
                right: '2rem',
                cursor: 'pointer',
              }}
            />
            <Image
              src={"/resources/discord.png"}
              alt="Discord"
              width={40}
              height={40}
              style={{
                position: 'absolute', 
                justifyContent: 'flex-end',
                top: '26rem', 
                right: '2rem',
                cursor: 'pointer',
              }}
            />
            <Image
              src={"/resources/skype.png"}
              alt="Skype"
              width={40}
              height={40}
              style={{
                position: 'absolute', 
                justifyContent: 'flex-end',
                top: '31rem', 
                right: '2rem',
                cursor: 'pointer',
              }}
            />
            <h1 style={{ 
              color: '#4D4D4D', 
              fontSize: '30px', 
              fontFamily: 'Anonymous Pro', 
              textAlign: 'center',
              position: 'relative',
              marginLeft: '150px',
              marginTop: '16rem', }}
            > <strong>Community Discussion Board</strong></h1>
            <input 
              type="text" 
              placeholder="Ask Community" 
              value={inputValue}
              onChange={handleInputChange}
              style={{
                position: 'absolute',
                width: '400px',
                height: '50px',
                marginLeft: '150px',
                top: '20rem',
                border: '2px solid #4A90E2',
                borderRadius: '5px',
                padding: '10px',
                color: '#4D4D4D',
              }}
            />  
            <Button 
              onClick={handlePostClick} 
              disabled={!inputValue} 
              style={{
                position: 'absolute',
                width: '100px',
                height: '50px',
                marginLeft: '150px',
                top: '24rem',
                backgroundColor: '#4A90E2',
                color: 'white',
                borderRadius: '5px',
                padding: '10px',
            }}
            >Post
            </Button>
        </div>
          <h1 style={{ 
            color: '#4D4D4D', 
            fontSize: '23px', 
            fontFamily: 'Anonymous Pro', 
            textAlign: 'center',
            position: 'absolute',
            bottom: '7rem',
            right: '0',
            left: '45%',
            }}
          ><strong>Sample Projects in:</strong></h1>
          <Image
            src={"/resources/github.png"}
            alt="Github"
            width={40}
            height={40}
            style={{
              position: 'absolute', 
              bottom: '7rem',
              right: '0',
              left: '78%',
              cursor: 'pointer',
            }}
          />
          <Image
            src={"/resources/gitlab.png"}
            alt="Gitlab"
            width={40}
            height={40}
            style={{
              position: 'absolute', 
              bottom: '7rem',
              right: '0',
              left: '81%',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

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

