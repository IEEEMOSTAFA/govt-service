

import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// import aboutImage from '../../assets/about-image.jpg'; // Import your image

const About = () => {
    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                {/* Section 1: Hero Section */}
                <div className="hero-section flex flex-col md:flex-row items-center gap-8 mb-16" data-aos="fade-up">
                    <div className="hero-content flex-1">
                        <h1 className="text-5xl font-bold mb-6">About Us</h1>
                        <p className="text-lg text-gray-600">
                            We are a team of passionate individuals dedicated to delivering the best solutions for our clients.
                        </p>
                    </div>
                    <div className="hero-image flex-1">
                        <img
                            // src={aboutImage}
                            src ="https://i.ibb.co/SwgXjYLP/16607.jpg"
                            alt="About Us"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Section 2: Mission Section */}
                <div className="mission-section text-center mb-16" data-aos="fade-left">
                    <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-600">
                        Our mission is to provide innovative and reliable services that help our clients achieve their goals.
                    </p>
                </div>

                {/* Section 3: Vision Section */}
                <div className="vision-section text-center mb-16" data-aos="fade-right">
                    <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                    <p className="text-lg text-gray-600">
                        We envision a world where technology empowers everyone to succeed.
                    </p>
                </div>

                {/* Section 4: Team Section */}
                <div className="team-section text-center mb-16" data-aos="zoom-in">
                    <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
                    <div className="team-members flex flex-wrap justify-center gap-8">
                        {/* Team Member 1 */}
                        <div className="team-member card w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/jkDWNBPG/CEO.jpg"
                                    alt="Team Member 1"
                                    className="rounded-full"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-2xl font-bold">John Doe</h3>
                                <p className="text-gray-600">CEO & Founder</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="team-member card w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/nWYSN5W/CTO-img.jpg"
                                    alt="Team Member 2"
                                    className="rounded-full"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-2xl font-bold">Jane Smith</h3>
                                <p className="text-gray-600">CTO</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="team-member card w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/bgqYKnmM/2149901777.jpg"
                                    alt="Team Member 3"
                                    className="rounded-full"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-2xl font-bold">Mike Johnson</h3>
                                <p className="text-gray-600">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;