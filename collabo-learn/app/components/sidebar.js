import React from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react"; 

const sidebarStyle = {
  backgroundColor: "#d9d9d9",
  marginTop: "105px",
  color: "#000",
  width: "200px",
  height: "calc(90% - 100px)",
  position: "fixed",
  top: "80px",
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
    padding: '30px',   
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
            <div style={{justifyContent: 'center', alignItems: 'center', padding: '5px'}}>
            <Image 
                src={"/resources/dashboard.png"}
                alt="Dashboard"
                width={40}
                height={40}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '15px'}}>Discussion Board</Text>
                <Image
                src={"/resources/calendar.png"}
                alt="Calendar"
                width={50}
                height={50}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '15px'}}>My Appointments</Text>
                <Image
                src={"/resources/edit.png"}
                alt="Notes"
                width={50}
                height={50}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '15px'}}>Notes</Text>
                <Image
                src={"/resources/meeting.png"}
                alt="Meetings"
                width={50}
                height={50}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '15px'}}>My Groups</Text>
                <Image
                src={"/resources/hyperlink.png"}
                alt="Learning"
                width={50}
                height={50}
                onMouseEnter={enlargeOnHover}
                onMouseLeave={resetSize}
                />
                <Text style={{justifyContent: 'center', padding: '15px'}}>Learning links</Text>
            </div>
        </div>
    </div>
    );
};