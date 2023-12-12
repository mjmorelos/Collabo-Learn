"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function About() {
  const mediaScrollerStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '21%',
    gap: '2rem',
    overflowX: 'auto',
    overscrollBehaviorInline: 'contain',
    padding: '0 var(--spacer) var(--spacer)',
  };

  const mediaScrollerItemStyle = {
    display: 'grid',
    gridTemplateRows: 'min-content',
    padding: '1.5rem',
    aspectRatio: '20/20',
    objectFit: 'cover',
  };

  const mediaScrollerItemImgStyle = {
    inlineSize: '70%',
    aspectRatio: '30/30',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  const enlarge = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.transition = 'transform 0.2s ease-in-out';
  };

  const shrink = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.transition = 'transform 0.2s ease-in-out';
  };

  return (
    <div className="About" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Navbar />
      <div style={{
          width: '100%',
          height: '100px',
          overflow: 'hidden',
          backgroundColor: '#99C2CF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'center' }}>
          <strong>Project Sample</strong><br/>
          This area features a carefully selected collection of previous student projects, providing a window into their originality and skill. It's a great source of ideas and knowledge about various project scopes and results.
        </div>
      </div>

      <div style={{ marginTop: '5rem', marginBottom: '5rem', color: '#4D4D4D', fontSize: '40px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'center' }}>
        <strong>Project Sample</strong>
        <div style={mediaScrollerStyle} className="media-scroller">
          {/* ChessForFun */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>ChessForFun</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/chesssample.png" alt="Chess" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink} />
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}> 
            <br></br> <br></br>
            <p>ChessForFun is a vibrant chess UI app that combines programming logic with strategic game play. This app is ideal for software development students who enjoy a good challenge and want to unwind with a colorful array of chess pieces that add a playful twist to the classic game. ChessForFun is more than just a game; it's a way to sharpen your problem-solving skills, with Python's logic, JavaScript's interactivity, and C#'s precision underpinning its architecture. Dive into matches that put your foresight and planning skills to the test, mirroring the critical thinking required for coding. It's more than just chess; it's a developer's playground for fun and growth.</p>
            </div>
          </div>

          {/* MyCalculator */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>MyCalculator</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/calculatorsample.png" alt="Calculator" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>Meet MyCalculator, an elegantly designed calculation app for software development students fluent in Java, Python, and C++. This app not only has a calming color scheme and clear typography, but it also has a logical arrangement of functions that mirrors the structured thinking required in programming. It is the ideal combination of functionality and simplicity, allowing for quick arithmetic during intense coding sessions or when parsing complex algorithms. MyCalculator is the go-to utility for developers who value a tool that complements their craft's precision and efficiency.</p>
            </div>
          </div>

          {/* EvoPlanner */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>EvoPlanner</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/calendarsample.png" alt="Calendar" width={"145"}  height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>Evo Planner is the next generation of calendar and reminder apps, designed with the precision of Python's data handling and the user-centric fluidity of Kotlin's mobile development abilities. Evo Planner is ideal for software development students and professionals because it has a refreshing interface with soothing colors that calms the mind, and its streamlined event tracking promotes productivity. Manage deadlines, code sprints, and collaborative meetings with ease, and sprinkle in reminders for well-deserved breaks. Evo Planner is about optimizing your life one code commit at a time, not just managing time.</p>
            </div>
          </div>

          {/* NavigateMe! */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>NavigateMe!</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/mapsample.png" alt="Map" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>NavigateMe! is more than just a navigation app; it's a journey planner written in Java with the flexibility of Swift. This UI app, designed for software development students, stands out with its isometric design and dark mode interface, which is easy on the eyes during late-night coding breaks. Its layered aesthetic represents the complexities of data structures and algorithms, which developers are familiar with. NavigateMe! is your ally, guiding you with clarity and style whether you're navigating city streets or data streams. This is more than just a tool; it is your constant companion in the world of code and concrete.</p>
            </div>
          </div>

          {/* SSSnake! */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>SSSnake!</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/SnakeSample.png" alt="Snake" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>Dive into SSSnake!, a sleek remake of the classic Snake game designed for modern software development students. SSSnake! offers an escape into a world of simple yet addictive gameplay with its neon cyberpunk aesthetic and engaging dark mode interface. The simple user interface, built with HTML5 and JavaScript, challenges you to beat the high score while subtly honing your algorithmic thinking. SSSnake! is a fun way to keep your reflexes sharp and your mind engaged during coding sessions. Are you prepared to slither your way to success? It's game on!</p>
            </div>
          </div>

          {/* TickyTacky */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>TickyTacky</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/Tic-Tac_ToeSample.png" alt="TicTacToe" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>TickyTacky, a minimalist and clean design that belies its educational potential, brings the timeless game of tic-tac-toe into the palms of software development students. Explore the classic Xs and Os gameplay, reimagined with a modern touch and intuitive interface, to sharpen your strategic thinking. TickyTacky is a testament to the power of simple, well-executed code, built using the agile methodologies of Swift for iOS and Kotlin for Android. It's more than just a game; it's a mental gym where the next generation of developers can work on their problem-solving skills. Prepare to make your move with TickyTacky, where logic and fun go hand in hand.</p>
            </div>
          </div>

          {/* 4Connection */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>4Connection</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/Connect4Sample.png" alt="Connect4" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>Enter the world of 4Connection, a digital twist on the popular Connect 4 game created specifically for software development students. As you align your red or blue discs, think two steps ahead, just like you would when debugging code. 4Connection is not only a test of foresight, but also a showcase of cutting-edge web app development, as it was built with React's dynamic UI capabilities and Node.js for a seamless multiplayer experience. 4Connection provides both entertainment and a subtle nod to the elegance of programming logic, whether you're taking a break from writing lines of code or simply enjoying a classic game. Are you ready to connect? Your next strategic move is just around the corner!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}