import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import '../styles/project-detail.css';

const ProjectDetailPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find the project with the matching ID
        const projectData = projects.find(p => p.id.toString() === id);
        setProject(projectData);
        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <main className="project-detail">
                <div className="container">
                    <div className="loading-spinner">Loading...</div>
                </div>
            </main>
        );
    }

    if (!project) {
        return (
            <main className="project-detail">
                <div className="container not-found">
                    <h2 className="not-found-title">Project not found</h2>
                    <Link to="/projects" className="back-button">
                        <FaArrowLeft className="back-icon" /> Back to Projects
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="project-detail">
            <div className="container">
                <div className="navigation-bar">
                    <Link to="/projects" className="back-button">
                        <FaArrowLeft className="back-icon" /> Back to Projects
                    </Link>
                </div>

                <div className="project-card">
                    <div className="project-content">
                        <div className="project-header">
                            <h1 className="project-title">{project.title}</h1>

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-button"
                                    aria-label="View GitHub Repository"
                                >
                                    <FaGithub className="github-icon" /> View GitHub Repo
                                </a>
                            )}
                        </div>

                        <div className="project-overview">
                            <h2 className="section-heading">Project Overview</h2>
                            <p className="project-description">
                                {project.description}
                            </p>
                        </div>

                        {project.details && project.details.length > 0 && (
                            <div className="project-details">
                                <h2 className="section-heading">Key Features</h2>
                                <ul className="job-description-list">
                                    {project.details.map((detail, index) => (
                                        <li key={index} className="job-description-item">
                                            <span className="bullet-point">▹</span>
                                            <span className="description-text">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="tech-container">
                            <h4 className="tech-title">Technologies Used:</h4>
                            <div className="tech-tags">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Remove the footer with the GitHub Repo button since we've moved it to the header */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetailPage;