"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react"; 

const sidebarStyle = {
  backgroundColor: "#d9d9d9",
  marginTop: "105px",
  color: "#000",
  width: "170px",
  height: "100%",
  position: "fixed",
  top: "80px",
  bottom: 0, 
  left: 0,
  overflowX: "hidden",
  overflowY: "auto",
  paddingTop: "30px",
  padding: "10px",
};

const iconsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',   
};

const iconItemStyle = {
    margin: '3rem 0',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
};

const textStyle = {
    marginTop: '1rem',
    alignItems: 'center',
    textAlign: 'center',
    opacity: '0.8', 
    transition: 'opacity 0.2s ease-in-out',
};

const enlargeOnHover = (e) => {
    const iconItem = e.target.parentElement; // Get the parent div
    const text = iconItem.querySelector('Text'); // Find the Text component
    e.target.style.transform = "scale(1.2)";
    e.target.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
    text.style.opacity = 1; // Show the text on hover
};

const resetSize = (e) => {
    const iconItem = e.target.parentElement; // Get the parent div
    const text = iconItem.querySelector('Text'); // Find the Text component
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
    text.style.opacity = 0; // Hide the text on mouse leave
  
};

export default function Sidebar(){
  return (
    <div className="sidenav" style={sidebarStyle}>
        <div className="icons" style={iconsStyle}>
            <div>
                <div style={iconItemStyle}>
                    <Image 
                        src={"/resources/dashboard.png"}
                        alt="Dashboard"
                        width={50}
                        height={50}
                        onMouseEnter={enlargeOnHover}
                        onMouseLeave={resetSize}
                    />
                    <Text style={textStyle}>Discussion Board</Text>
                </div>
                <div style={iconItemStyle}>
                    <Image
                    src={"/resources/calendar.png"}
                    alt="Calendar"
                    width={50}
                    height={50}
                    onMouseEnter={enlargeOnHover}
                    onMouseLeave={resetSize}
                    />
                    <Text style={textStyle}>My Appointments</Text>
                </div>
                <div style={iconItemStyle}>
                    <Image
                    src={"/resources/edit.png"}
                    alt="Notes"
                    width={50}
                    height={50}
                    onMouseEnter={enlargeOnHover}
                    onMouseLeave={resetSize}
                    />
                    <Text style={textStyle}>Notes</Text>
                </div>
                <div style={iconItemStyle}>
                    <Image
                        src={"/resources/meeting.png"}
                        alt="Meetings"
                        width={50}
                        height={50}
                        onMouseEnter={enlargeOnHover}
                        onMouseLeave={resetSize}
                        />
                    <Text style={textStyle}>My Groups</Text>
                </div>
                <div style={iconItemStyle}>
                    <Image
                    src={"/resources/hyperlink.png"}
                    alt="Learning"
                    width={50}
                    height={50}
                    onMouseEnter={enlargeOnHover}
                    onMouseLeave={resetSize}
                    />
                    <Text style={textStyle}>Learning links</Text>
                </div>
            </div>
        </div>
    </div>
    );
};