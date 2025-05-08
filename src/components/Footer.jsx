import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-social">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="social-link"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>

                    <p className="copyright">Copyright
                        &copy; {currentYear} | All rights reserved.
                    </p>

                    <p className="footer-note">
                        Made with ❤️ by petrioteer
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;