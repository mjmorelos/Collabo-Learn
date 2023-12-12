"use client";
import React, { useState } from 'react';
import { Button, Input, Box, VStack } from '@chakra-ui/react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Tutor = () => {
  const [searchText, setSearchText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      bg={isDarkMode ? '#1a202c' : 'white'}
      color={isDarkMode ? 'white' : 'black'}
      minH="100vh"
      display="flex"
      flexDir="column"
      p={15}
    >
      <Navbar />

      <div className="header">
        <h1
          style={{
            color: isDarkMode ? '#90cdf4' : '#004080',
            fontWeight: 'bold',
            fontSize: '70px',
            textShadow: '2px 2px 10px rgba(173, 216, 230, 0.5)',
            fontFamily: 'Arial',
            margin: '20px 0',
            height: '550px',
            width: '400px',
            position: 'absolute',
            top: '50%',
            left: '52%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Find a Tutor
        </h1>
      </div>

      <div className="search-container">
        <VStack
          spacing={10}
          textAlign="left"
          w="90%"
          h="12%"
          alignItems="left"
          position="absolute"
          top="48%"
          left="47.5%"
          transform="translate(-50%, -80%)"
        >
          <Input
            type="text"
            placeholder="Search by language name, specialty"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            borderColor="black"
            borderWidth="4px"
            borderRadius="50px"
            color="black"
            fontSize="20px"
            size="1g"
            textAlign="left"
            w="40%"
            h="90%"
            px={4}
            py={10}
          />
          <Button
            colorScheme="blue"
            onClick={handleSearch}
            color="black"
            className={`hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${
              isDarkMode ? 'bg-gray-700' : 'bg-teal-400'
            }`}
            style={{
              borderRadius: '25px',
              background: isDarkMode ? '#2b6cb0' : '#2BCCBD',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              width: '10%',
              padding: '15px',
              fontWeight: 'bold',
              fontSize: '18px',
              textShadow: '2px 2px 10px rgba(173, 216, 230, 0.5)',
              fontFamily: 'Arial',
            }}
          >
            Explore Tutors
          </Button>
        </VStack>
      </div>

      <div className="button-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '550px' }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            colorScheme="black"
            color="black"
            className="border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            style={{
              borderRadius: '20px',
              background: isDarkMode ? '#2b6cb0' : '#2BCCBD',
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
              width: '20%',
              marginBottom: '10%', 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '25px',
              textShadow: '2px 2px 10px rgba(173, 216, 230, 0.5)',
              fontFamily: 'Arial',
              flex: '0 27%',
              height: '80px',
              marginBottom: '2%',
              marginLeft: '40px',
              marginRight: '40px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={button.imgSrc} alt={button.label} width={55} height={40} style={{ marginRight: '10px' }} />
              <span style={{ fontFamily: 'MyCustomFont, Arial, sans-serif' }}>
                {button.label}
              </span>
            </div>
          </Button>
        ))}
      </div>

      <Button
  onClick={toggleDarkMode}
  colorScheme={isDarkMode ? 'gray' : 'teal'}
  position="fixed"
  top="20%"
  right="1rem"
  zIndex="999"
  borderRadius="50%"
  p="1rem"
  fontSize="2rem"
  _hover={{
    background: isDarkMode ? '#2d3748' : '#63b3ed', 
    color: 'white',
  }}
>
  {isDarkMode ? '🌞 ' : '🌙 '}
</Button>

      <Navbar />
      <Footer />
    </Box>
  );
};

const buttons = [
  { label: 'UI/UX Design', imgSrc: '/resources/ux_logo.png' },
  { label: 'Python', imgSrc: '/resources/python_logo.png' },
  { label: 'Java', imgSrc: '/resources/java_logo.png' },
  { label: 'Web Development', imgSrc: '/resources/WD_logo.png' },
  { label: 'Database PL/SQL', imgSrc: '/resources/plsql_logo.png' },
  { label: 'C#', imgSrc: '/resources/csharp_logo.png' },
  { label: 'Mobile Applications', imgSrc: '/resources/mobile_logo.png' },
  { label: 'Networking Systems', imgSrc: '/resources/networking_logo.png' },
  { label: 'C++', imgSrc: '/resources/cplus_logo.png' },
];

export default Tutor;
