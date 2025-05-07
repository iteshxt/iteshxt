import { about } from '../data/portfolioData';
import '../styles/about.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">
                    {about.title}
                </h2>

                <div className="about-content">
                    {about.description.map((paragraph, index) => (
                        <p key={index} className="about-paragraph">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;