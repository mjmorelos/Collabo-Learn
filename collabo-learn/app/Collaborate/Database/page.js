"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import CollabMenuBar from '../../components/collab-menu-bar';

const GitHubDatabase = () => {
  const [projects, setProjects] = useState([]);
  const databaseSearch = 'database';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.github.com/search/repositories?q=topic:${databaseSearch}`;

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
  }, [databaseSearch]);

  return (
    <div className="DatabaseContainer" style={{ backgroundColor: 'white' }}>
      <Navbar />
      <CollabMenuBar />
      <div className="DatabaseProjects" style={{ color: '#4D4D4D', paddingLeft: '20px', paddingTop: '200px', fontFamily: 'Anonymous Pro, monospace', fontSize: '2rem' }}>
      
        <h1 style={{ padding: '20px 0', textAlign: 'center'}}>Database Projects</h1>

        <div className="DatabaseList" style={{ display: 'flex', paddingTop: '10px', flexWrap: 'wrap', justifyContent: 'space-around', fontSize: '1rem' }}>
        
          {projects.map((project) => (
            <div key={project.id} style={{ flexBasis: 'calc(50% - 20px)', padding: '15px', border: '2px solid #14B8A6', borderRadius: '8px', marginBottom: '20px', boxSizing: 'border-box' }}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ProjectLink"
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

export default GitHubDatabase;