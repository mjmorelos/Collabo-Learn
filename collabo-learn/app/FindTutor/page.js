"use client";
import React from 'react';
import { Button } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Tutor = () => {
    return (
        <div className="Tutor" style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <h1>This is the find the tutor page</h1>

            <div className="index" style={{ flex: 1 }}>
                {/* Nested structure for your components */}
                <div className="div">
                    <div className="overlap">
                        <div className="overlap-group">
                            {/* ... Your existing nested structure goes here ... */}
                        </div>
                    </div>
                    <Button
                        className="button-instance"
                        colorScheme="teal"  // Adjust colorScheme as per your requirement
                        size="lg"           // Adjust size as per your requirement
                    >
                        C# {/* Content inside the button */}
                    </Button>
                    <img
                        className="arrow-4"
                        alt="Arrow"
                        src="/resources/arrowb_logo.png"
                    />
                    <img
                        className="image-7"
                        alt="Image"
                        src="/resources/csharp_logo.png"
                    />
                </div>
                <div className="overlap-9">
                    {/* ... Additional components ... */}
                </div>
                <div className="overlap-10">
                    {/* ... Additional components ... */}
                </div>
                <div className="overlap-11">
                    {/* ... Additional components ... */}
                </div>
                <div className="overlap-12">
                    {/* ... Additional components ... */}
                </div>
            </div>

            <div className="overlap-13">
                {/* Additional components */}
                <div className="name-field" />
                <p className="p">Search By Language name specialty</p>
                <Button
                    className="button-8"
                    colorScheme="teal"  // Adjust colorScheme as per your requirement
                    size="lg"           // Adjust size as per your requirement
                >
                    Explore Tutors {/* Content inside the button */}
                </Button>
            </div>

            <div className="text-wrapper-5">Find a Tutor</div>

            <div className="overlap-14">
                {/* Additional components */}
                <Button
                    className="button-instance"
                    colorScheme="teal"  // Adjust colorScheme as per your requirement
                    size="lg"           // Adjust size as per your requirement
                >
                    Web Development {/* Content inside the button */}
                </Button>
                <img
                    className="arrow-9"
                    alt="Arrow"
                    src="/resources/arrowb_logo.png"
                />
                <img
                    className="programming-logos-2"
                    alt="Programming logos"
                    src="/resources/webdev_logo.png"
                />
            </div>

            <Footer style={{ marginTop: 'auto', width: '100%' }} />
        </div>
    );
};

export default Tutor;
