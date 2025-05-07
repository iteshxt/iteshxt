import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../data/portfolioData';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = ({ currentTheme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const indicatorRef = useRef(null);
    const navLinksRef = useRef([]);
    const [animationComplete, setAnimationComplete] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Animation for the active link indicator
    useEffect(() => {
        if (navLinksRef.current.length > 0) {
            const activeLink = navLinksRef.current.find(
                (ref) => ref && ref.getAttribute('data-href') === location.pathname
            );

            if (activeLink && indicatorRef.current) {
                // Start animation
                setAnimationComplete(false);

                // Position and size the indicator to match the active link
                const indicatorEl = indicatorRef.current;
                indicatorEl.style.width = `${activeLink.offsetWidth}px`;
                indicatorEl.style.left = `${activeLink.offsetLeft}px`;
                indicatorEl.classList.add('visible');

                // Mark animation as complete after transition finishes
                const transitionDuration = 400; // match the CSS transition duration (0.4s = 400ms)
                setTimeout(() => {
                    setAnimationComplete(true);
                }, transitionDuration);
            }
        }
    }, [location.pathname]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {/* Animated indicator for active link */}
                    <div className="nav-link-indicator" ref={indicatorRef}></div>

                    {navigationLinks.map((link, index) => (
                        <Link
                            key={link.id}
                            to={link.href}
                            data-href={link.href}
                            className={`nav-link ${location.pathname === link.href
                                ? animationComplete ? 'nav-link-active nav-link-animated' : 'nav-link-active'
                                : ''}`}
                            ref={(el) => (navLinksRef.current[index] = el)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="theme-toggle-button"
                    aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
                >
                    {currentTheme === 'light' ? (
                        <FaMoon className="theme-icon" />
                    ) : (
                        <FaSun className="theme-icon" />
                    )}
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="mobile-menu-button"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <FaTimes className="menu-icon" />
                    ) : (
                        <FaBars className="menu-icon" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.href}
                            className={`nav-link ${location.pathname === link.href ? 'nav-link-active nav-link-animated' : ''}`}
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;