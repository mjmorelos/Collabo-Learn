import React from "react";
import Link from "next/link";

export default function Collaboration() {
    const mediaScrollerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'auto',
        gap: '2rem',
        padding: '4rem 0',

      };
      
      const mediaScrollerItemStyle = {
        flex: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '8px',
        overflowX: 'hidden'
      };
    
      const mediaScrollerItemImgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      };
    
    return (
        <div style={{ 
            marginTop: '1rem', 
            color: '#4D4D4D', 
            fontSize: '23px', 
            fontFamily: 'Anonymous Pro', 
            lineHeight: '3', 
            textAlign: 'center' }}>
        
            <div style={mediaScrollerStyle} className="media-scroller">
                <div style={mediaScrollerItemStyle} className="media-scroller-item">
                    <img style={mediaScrollerItemImgStyle} src="/resources/web.jpg" alt="Web" />
                </div>
                <div style={mediaScrollerItemStyle}class="media-scroller-item">
                    <img style={mediaScrollerItemImgStyle} src="/resources/uxui.jpg" alt="UI/UX" />
                </div>
                <div style={mediaScrollerItemStyle}class="media-scroller-item">
                    <img style={mediaScrollerItemImgStyle} src="/resources/database.jpg" alt="Database" />
                </div>
                <div style={mediaScrollerItemStyle}class="media-scroller-item">
                    <img style={mediaScrollerItemImgStyle} src="/resources/language.jpg" alt="OOP" />
                </div>
                <div style={mediaScrollerItemStyle}class="media-scroller-item">
                    <img style={mediaScrollerItemImgStyle} src="/resources/network.jpg" alt="Networking" />
                </div>
                <div style={mediaScrollerItemStyle}class="media-scroller-item">
                    <img style={mediaScrollerItemImgStyle} src="/resources/mobile.jpg" alt="Mobile" />
              </div>
        </div>
      </div>
    );     
};