"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';

const MainWorkSpaceStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  backgroundColor: '#99C2CF',
  minHeight: '100vh',
  width: '100%',
  flex: '1',
  marginLeft: '200px',
};

export default function DiscussionBoard() {
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
    <div style={MainWorkSpaceStyle}>
      <div style={{ position: 'absolute', marginTop: '14rem' }}>
        <h1 style={{ color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro' }}>
          <strong>Community Discussion Board</strong>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
          <input
            type="text"
            placeholder="Ask Community"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              width: '400px',
              height: '50px',
              border: '2px solid #4A90E2',
              borderRadius: '5px',
              padding: '10px',
              color: '#4D4D4D',
              marginRight: '20px',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={"/resources/attach-file.png"}
              alt="Attach File"
              width={40}
              height={40}
              style={{ marginTop: '20px', cursor: 'pointer' }}
            />
            <Button
              onClick={handlePostClick}
              disabled={!inputValue}
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: '#4A90E2',
                color: 'white',
                borderRadius: '5px',
                padding: '10px',
                marginTop: '10px',
                marginLeft: '20px',
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <h2 style={{ color: '#4D4D4D', fontSize: '23px', fontFamily: 'Anonymous Pro', textAlign: 'center' }}>
          <strong>Sample Projects in:</strong>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src={"/resources/github.png"}
            alt="Github"
            width={40}
            height={40}
            style={{ marginRight: '10px', cursor: 'pointer' }}
          />
          <Image
            src={"/resources/gitlab.png"}
            alt="Gitlab"
            width={40}
            height={40}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
}
