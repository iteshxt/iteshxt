import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import '../styles/projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="section-title">
                    Projects
                </h2>
                <p className="projects-subtitle">Library of the Projects I've worked on</p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}
                            className="project-card"
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <div className="arrow-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="project-description">
                                    {project.shortDescription || project.description.split('.')[0] + '.'}
                                </p>

                                <div className="tech-tags">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="tech-tag"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;