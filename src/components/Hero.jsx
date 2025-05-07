import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/images/profile.jpg';
import '../styles/hero.css';

const Hero = () => {
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        // Set typing as complete after animation duration
        const timer = setTimeout(() => {
            setTypingComplete(true);
        }, 2500); // Match this to the CSS animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <div className="typing-container">
                                <span className={`typing-animation ${typingComplete ? 'typing-complete' : ''}`}>
                                    Hello, I'm <span className="hero-name">{personalInfo.firstName}</span>
                                </span>
                            </div>
                        </h1>
                        <h2 className="hero-subtitle">
                            {personalInfo.role}
                        </h2>
                        <p className="hero-description">
                            {personalInfo.description}
                        </p>

                        <div className="cta-buttons">
                            <Link
                                to="/contact"
                                className="btn btn-primary"
                            >
                                Contact Me
                            </Link>
                            <a
                                href={personalInfo.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn resume-btn"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>

                    <div className="profile-image-container">
                        <div className="profile-image">
                            <img src={profileImage} alt={`${personalInfo.firstName} ${personalInfo.lastName}`} className="profile-img" />
                        </div>

                        <div className="social-links">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="social-link"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;