import React from "react";
import { Text } from "@chakra-ui/react";

const collabMenuStyle = {
  backgroundColor: "#14B8A6",
  marginTop: "220px",
  marginLeft: "30px",
  
  height: "50px",
  width: "400px",
  position: "absolute",
  left: "0",
  borderRadius: "10px",
  display: "flex",
  paddingLeft: "20px",
};

const buttonStyle = {
  border: "2px solid #14B8A6",
  borderRadius: "8px",
  marginRight: "30px",
  cursor: "pointer",
  color: "#F5F5F5",
  fontWeight: "bold"
};

const enlargeOnHover = (e) => {
  e.target.style.transform = "scale(1.5)";
  e.target.style.transition =
    "width 0.2s ease-in-out, height 0.2s ease-in-out";
};

const resetSize = (e) => {
  e.target.style.transform = "scale(1)";
  e.target.style.transition =
    "width 0.2s ease-in-out, height 0.2s ease-in-out";
};

export default function Sidebar() {
  return (
    <div className="sidenav" style={collabMenuStyle}>
      <button
        style={{ ...buttonStyle, backgroundColor: "#14B8A6" }}
        onMouseEnter={enlargeOnHover}
        onMouseLeave={resetSize}
      >
        Discussion Board
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#14B8A6" }}
        onMouseEnter={enlargeOnHover}
        onMouseLeave={resetSize}
      >
        Notes
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#14B8A6" }}
        onMouseEnter={enlargeOnHover}
        onMouseLeave={resetSize}
      >
        Learning links
      </button>
    </div>
  );
}
