"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react"; 

const sidebarStyle = {
  backgroundColor: "#d9d9d9",
  marginTop: "105px",
  color: "#000",
  width: "180px",
  height: "80%",
  position: "fixed",
  top: "80px",
  bottom: "10", 
  left: "0",
  overflowX: "hidden",
  overflowY: "auto",
  paddingTop: "30px",
};

const iconsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',   
};

const enlargeOnHover = (e) => {
    e.target.style.transform = "scale(1.5)";
    e.target.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
};

const resetSize = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
};

export default function Sidebar(){
  return (
    <div className="sidenav" style={sidebarStyle}>
        <div className="icons" style={iconsStyle}>
            <div style={{justifyContent: 'center', padding: '2px',}}>
            <Image 
                src={"/resources/dashboard.png"}
                alt="Dashboard"
                width={40}
                height={40}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '8px'}}>Discussion Board</Text>
                <Image
                src={"/resources/calendar.png"}
                alt="Calendar"
                width={40}
                height={40}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '8px'}}>My Appointments</Text>
                <Image
                src={"/resources/edit.png"}
                alt="Notes"
                width={40}
                height={40}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '8px'}}>Notes</Text>
                <Image
                src={"/resources/meeting.png"}
                alt="Meetings"
                width={40}
                height={40}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '8px'}}>My Groups</Text>
                <Image
                src={"/resources/hyperlink.png"}
                alt="Learning"
                width={40}
                height={40}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '8px'}}>Learning links</Text>
            </div>
        </div>
    </div>
    );
};