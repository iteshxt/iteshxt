import { experience, skills } from '../data/portfolioData';
import '../styles/experience.css';

const SkillTag = ({ skill }) => (
    <span className="skill-tag">
        {skill}
    </span>
);

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <h2 className="section-title">
                    Experience
                </h2>
                <p className="experience-subtitle">Places I've worked at and things I've built</p>

                <div className="experience-content">
                    {experience.map((job) => (
                        <div key={job.id} className="job-item">
                            <h3 className="job-title">
                                {job.title} <span className="company-at">@</span>{job.company}
                            </h3>
                            <p className="job-period">{job.date}</p>

                            <ul className="job-description-list">
                                {job.description.map((item, index) => (
                                    <li key={index} className="job-description-item">
                                        <span className="bullet-point">▹</span>
                                        <span className="description-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="tech-container">
                                <h4 className="tech-title">Technologies Used:</h4>
                                <div className="tech-tags">
                                    {job.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="tech-tag"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h3 className="section-subtitle">
                        Skills
                    </h3>

                    <div>
                        {/* Technical Skills */}
                        <div className="skills-group">
                            <h4 className="skills-group-title">
                                Technical Skills
                            </h4>
                            <div className="skills-list">
                                {skills.technical.map((skill) => (
                                    <SkillTag key={skill} skill={skill} />
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="skills-group">
                            <h4 className="skills-group-title">
                                Soft Skills
                            </h4>
                            <div className="skills-list">
                                {skills.softSkills.map((skill) => (
                                    <SkillTag key={skill} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;