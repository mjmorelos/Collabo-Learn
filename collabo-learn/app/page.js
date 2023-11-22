import React from 'react';

// Navbar component
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white text-black font-anonymous">
      <div className="text-xl font-semibold text-black">Collabo-Learn</div>
      <div className="space-x-4">
        <a href="#home" className="hover:underline text=black">Home</a>
        <a href="#collaborate" className="hover:underline text=black">Collaborate</a>
        <a href="#find-tutor" className="hover:underline text=black">Find a tutor</a>
        <a href="#sample-projects" className="hover:underline text=black">Sample Projects</a>
      </div>
    </nav>
  );
};

// Hero component for the main banner with text and image side by side
const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-blue-200 px-6" style={{ height: '263px' }}>
      <img 
        src="https://techpando.com/wp-content/uploads/2022/09/Uses-of-Laptop-in-Our-Daily-Life.jpg"
        alt="Collaborative workspace"
        className="mr-20 w-auto" // Added right margin of 1rem (mr-4)
        style={{ width: '552px', height: '263px' }} // Inline styles for exact sizing
      />
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Collaborate and Learn.</h1>
        <p className="mt-4 text-lg">A place to share knowledge and better understand the world.</p>
      </div>
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
    <footer className="flex justify-between items-center p-4 bg-gray-200 text-black">
      <div className="flex space-x-4">
        {/* Placeholder for social icons */}
      </div>
      <div className="space-x-4">
        <a href="#general" className="hover:underline text-black">General</a>
        <a href="#careers" className="hover:underline text-black">Careers</a>
      </div>
      <div className="text-sm text-black">
        Copyright © 2023 Collabo–Learn Inc. All Rights Reserved
      </div>
    </footer>
  );
};
// Main App component that composes the page
const App = () => {
  return (
    <div className="App bg-white">
      <Navbar />
      <Hero />
      <div className="my-8">
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