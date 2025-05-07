import { useState } from 'react';
import { skills } from '../data/portfolioData';
import '../styles/skills.css';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt,
    FaDocker, FaAws, FaDatabase, FaCode
} from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiMongodb, SiTailwindcss,
    SiRedux, SiNextdotjs, SiGraphql, SiJest, SiCypress, SiExpress
} from 'react-icons/si';

// Map tech skills to their icons
const getTechIcon = (skill) => {
    const iconMap = {
        "JavaScript": <SiJavascript className="skill-icon js-icon" />,
        "React.js": <FaReact className="skill-icon react-icon" />,
        "Node.js": <FaNodeJs className="skill-icon node-icon" />,
        "TypeScript": <SiTypescript className="skill-icon ts-icon" />,
        "HTML5/CSS3": <div className="icon-group"><FaHtml5 className="skill-icon html-icon" /><FaCss3Alt className="skill-icon css-icon" /></div>,
        "AWS": <FaAws className="skill-icon aws-icon" />,
        "Tailwind CSS": <SiTailwindcss className="skill-icon tailwind-icon" />,
        "MongoDB": <SiMongodb className="skill-icon mongo-icon" />,
        "Express.js": <SiExpress className="skill-icon express-icon" />,
        "Git": <FaGitAlt className="skill-icon git-icon" />,
        "RESTful APIs": <FaCode className="skill-icon rest-icon" />,
        "SQL/NoSQL": <FaDatabase className="skill-icon database-icon" />,
        "Redux": <SiRedux className="skill-icon redux-icon" />,
        "Next.js": <SiNextdotjs className="skill-icon next-icon" />,
        "GraphQL": <SiGraphql className="skill-icon graphql-icon" />,
        "Docker": <FaDocker className="skill-icon docker-icon" />,
        "CI/CD": <FaCode className="skill-icon cicd-icon" />,
        "Jest": <SiJest className="skill-icon jest-icon" />,
        "Cypress": <SiCypress className="skill-icon cypress-icon" />
    };

    return iconMap[skill] || <FaCode className="skill-icon" />;
};

// Organize skills into categories
const skillCategories = {
    "Frontend": ["React.js", "HTML5/CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "Next.js"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
    "Database": ["MongoDB", "SQL/NoSQL"],
    "DevOps & Tools": ["Git", "Docker", "CI/CD", "AWS"],
    "Testing": ["Jest", "Cypress"]
};

const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card-item">
            <div className="skill-icon-container">
                {getTechIcon(skill)}
            </div>
            <span className="skill-name">{skill}</span>
        </div>
    );
};

const SkillCategory = ({ title, skillsList }) => {
    const filteredSkills = skillsList.filter(skill =>
        skills.technical.includes(skill)
    );

    return (
        <div className="skill-category">
            <h3 className="category-title">{title}</h3>
            <div className="skill-cards">
                {filteredSkills.map(skill => (
                    <SkillCard key={skill} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('technical');

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">
                    Skills & Expertise
                </h2>

                <div className="skills-tabs">
                    <button
                        className={`tab-button ${activeTab === 'technical' ? 'active' : ''}`}
                        onClick={() => setActiveTab('technical')}
                    >
                        Technical Skills
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'soft' ? 'active' : ''}`}
                        onClick={() => setActiveTab('soft')}
                    >
                        Soft Skills
                    </button>
                </div>

                <div className="skills-content">
                    {activeTab === 'technical' ? (
                        <div className="technical-skills">
                            {Object.entries(skillCategories).map(([category, categorySkills]) => (
                                <SkillCategory
                                    key={category}
                                    title={category}
                                    skillsList={categorySkills}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="soft-skills">
                            <div className="soft-skills-grid">
                                {skills.softSkills.map(skill => (
                                    <div key={skill} className="soft-skill-card">
                                        <div className="soft-skill-content">
                                            <span>{skill}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;