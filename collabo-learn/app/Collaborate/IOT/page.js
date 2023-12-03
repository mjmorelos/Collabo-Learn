"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import CollabMenuBar from '../../components/collab-menu-bar';
import Link from 'next/link';

const IoTProjects = () => {
  const [projects, setProjects] = useState([]);
  const thingspeakEndpoint = 'https://api.thingspeak.com/channels/public.json';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const githubUrl = 'https://api.github.com/search/repositories?q=iot';

        const githubResponse = await fetch(githubUrl);

        if (githubResponse.ok) {
          const githubData = await githubResponse.json();
          setProjects(githubData.items);
        } else {
          console.error('Failed to fetch GitHub data');
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    const fetchThingSpeakData = async () => {
      try {
        const thingspeakResponse = await fetch(thingspeakEndpoint);

        if (thingspeakResponse.ok) {
          const thingspeakData = await thingspeakResponse.json();

          if (thingspeakData.feeds && typeof thingspeakData.feeds[Symbol.iterator] === 'function') {
            const iotProjects = thingspeakData.feeds.filter((project) =>
              project.name.includes('iot') || project.description.includes('iot')
            );

            setProjects((prevProjects) => [...prevProjects, ...iotProjects]);
          } else {
            console.error('Invalid ThingSpeak data structure');
          }
        } else {
          console.error('Failed to fetch ThingSpeak data');
        }
      } catch (error) {
        console.error('Error fetching ThingSpeak data:', error);
      }
    };

    fetchGitHubData();
    fetchThingSpeakData();
  }, [thingspeakEndpoint]);

  return (
    <div className="mainContainer" style={{ backgroundColor: 'white' }}>
      <div className="iot-projects-container" style={{ minHeight: '100vh' }}>
        <Navbar />
        <CollabMenuBar />
        <div className="iot-projects-list" style={{ color: 'black', paddingLeft: '20px', paddingTop: '200px', fontFamily: 'Anonymous Pro, monospace', color: '#4D4D4D', fontSize: '2rem' }}>
          <h1 style={{ padding: '20px 0', textAlign: 'center' }}>Internet of Things (IoT) Projects</h1>
          <div className="iot-projects-grid" style={{ display: 'flex', paddingTop: '10px', flexWrap: 'wrap', justifyContent: 'space-around', fontSize: '1rem' }}>
            {projects.map((project) => (
              <div key={project.id} style={{ flexBasis: 'calc(50% - 20px)', padding: '15px', border: '2px solid #14B8A6', borderRadius: '8px', marginBottom: '20px', boxSizing: 'border-box' }}>
                <a
                  href={project.html_url || project.channel_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link border border-teal-500 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
                >
                  <strong>{project.name || project.channel_name}</strong>
                </a>
                <p style={{ paddingTop: '10px' }}>
                  {(project.description || project.description_field) &&
                    (project.description || project.description_field).length > 200
                    ? (project.description || project.description_field).slice(0, 200) + '...'
                    : project.description || project.description_field}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IoTProjects;