"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import CollabMenuBar from '@/app/components/collab-menu-bar';

const GitHubJava = () => {
  const [projects, setProjects] = useState([]);
  const language = 'java';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.github.com/search/repositories?q=language:${language}`;
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          setProjects(data.items);
        } else {
          console.error('Failed to fetch data from GitHub API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [language]);

  return (
    <div className="JavaProjectsContainer" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Navbar />
      <CollabMenuBar />
      <div className="JavaProjectsContent" style={{ color: 'black', paddingLeft: '20px', paddingTop: '200px', fontFamily: 'Anonymous Pro, monospace', color: '#4D4D4D', fontSize: '2rem' }}>
        <h1 style={{ padding: '20px 0', textAlign: 'center' }}>Java Projects on GitHub</h1>

        <div className="JavaProjectsList" style={{ display: 'flex', paddingTop: '10px', flexWrap: 'wrap', justifyContent: 'space-around', fontSize: '1rem' }}>
          {projects.map((project) => (
            <div key={project.id} style={{ flexBasis: 'calc(50% - 20px)', padding: '15px', border: '2px solid #14B8A6', borderRadius: '8px', marginBottom: '20px', boxSizing: 'border-box' }}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="JavaProjectLink border border-teal-500 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
              >
                <strong>{project.name}</strong>
              </a>
              <p style={{ paddingTop: '10px' }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GitHubJava;