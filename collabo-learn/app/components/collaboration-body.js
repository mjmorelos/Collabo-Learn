    import React from "react";
    import Link from "next/link";
    
    export default function Collaboration() {
        const mediaItems = [
            {href: "/Collaborate/web", src: "/resources/web.jpg", alt: "Web"},
            {href: "/Collaborate/uxi", src: "/resources/uxui.jpg", alt: "UI/UX"},
            {href: "/Collaborate/mobile", src: "/resources/mobile.jpg", alt: "Mobile"},
            {href: "/Collaborate/ai", src: "/resources/machine-learning.jpg", alt: "AI"},
            {href: "/Collaborate/database", src: "/resources/database.jpg", alt: "Database"},
            {href: "/Collaborate/language", src: "/resources/language.jpg", alt: "OOP"},
            {href: "/Collaborate/network", src: "/resources/networking.jpg", alt: "Networking"},

            {href: "/Collaborate/iot", src: "/resources/IoT.jpg", alt: "IoT"},

        ];
    
        const enlarge = (e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'width 0.2s ease-in-out, height 0.2s ease-in-out';
        };
    
        const shrink = (e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.transition = 'width 0.2s ease-in-out, height 0.2s ease-in-out';
        };
    
        const mediaScrollerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'auto',
            gap: '4rem',
            padding: '2rem 0',
          };
          
          const mediaItemStyle = {
            minWidth: 'auto',
            overflow: 'hidden',
            borderRadius: '8px',
            position: 'relative',
            transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
          };
        
          const mediaScrollerItemImgStyle = {
            width: '100%',
            height: 'auto',
            transition: 'width 0.2s ease-in-out',
          };

        return (
            <div style={{marginTop: '5rem'}}>     
                <div style={{ color: '#4D4D4D', fontSize: '23px', fontFamily: 'Anonymous Pro', lineHeight: '1.6', textAlign: 'center' }}>
                <strong>AREAS OF INTEREST</strong>
                </div>   
                <div style={mediaScrollerStyle} className="media-scroller">
                    {mediaItems.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <div style={index === 0 ? mediaItemStyle: mediaItemStyle}>
                                <img 
                                    style={mediaScrollerItemImgStyle} 
                                    src={item.src} 
                                    alt={item.alt} 
                                    onMouseEnter={enlarge}
                                    onMouseLeave={shrink}
                                />
                            </div>
                        </Link>
                    ))}
                </div>      
            </div>
        );     
    }
    
    
    

