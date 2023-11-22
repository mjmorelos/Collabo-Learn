import React from 'react';

// Navbar component
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center py-4 px-6 shadow-md bg-white text-black font-anonymous">
      <div className="text-xl font-semibold text-black">
        <img src="https://i.postimg.cc/FRnsYr8k/collabo-logo.png" alt="Collabo-Learn Logo" />
      </div>
      <div className="space-x-4">
        <button className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
          <a href="#home" className="hover:underline">Home</a>
        </button>

        <button className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
          <a href="#collaborate" className="hover:underline">Collaborate</a>
        </button>

        <button className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
          <a href="#find-tutor" className="hover:underline">Find a tutor</a>
        </button>

        <button className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
          <a href="#sample-projects" className="hover:underline">Sample Projects</a>
        </button>
      </div>

    </nav>
  );
};

// Hero component for the main banner with text and image side by side
const Hero = () => {
  return (
    <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
      <img
        src="https://i.postimg.cc/fyt2NCYS/cover-page.png"
        alt="Collaborative workspace"
        className="mr-20 w-auto"
        style={{ width: '100%', height: '100%' }}
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

// Footer component
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-4" style={{ backgroundColor: 'gray' }}>
      <div className="flex space-x-4">
        {/* Placeholder for social icons */}
        <a href="#Social" className="hover:underline text-white">Social</a>
        <a href="#" className="text-white">
          <img src="https://i.postimg.cc/W3Ch1B9n/facebook.png" alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="#" className="text-white">
          <img src="https://i.postimg.cc/Y95CH19D/instagram.png" alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="#" className="text-white">
          <img src="https://i.postimg.cc/3wW80L0b/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
        </a>
        <a href="#" className="text-white">
          <img src="https://i.postimg.cc/LX1mNnTt/youtube.png" alt="Youtube" className="h-6 w-6" />
        </a>
      </div>


      <div className="space-x-4">
        <a href="#careers" className="hover:underline text-white">Careers</a>
        
          <a href="#Apply" className="hover:underline text-white">Apply</a>
       
       
          <a href="#Search" className="hover:underline text-white">Search</a>
        
      </div>
      <div className="text-sm text-white">
        Copyright © 2023 Collabo-Learn Inc. All Rights Reserved
      </div>
    </footer>
  );
};

// Main App component that composes the page
const App = () => {
  return (
    <div className="App" style={{ backgroundColor: 'white' }}>
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

export default App;
