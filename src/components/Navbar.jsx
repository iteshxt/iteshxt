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
    const [iconFading, setIconFading] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Enhanced toggle theme function with animation
    const handleToggleTheme = () => {
        // Add the ripple effect class
        const themeButton = document.querySelector('.theme-toggle-button');
        themeButton.classList.add('clicked');

        // Remove ripple class after animation completes
        setTimeout(() => {
            themeButton.classList.remove('clicked');
        }, 600);

        // Fade out current icon
        setIconFading(true);

        // Toggle theme immediately while icon is fading
        toggleTheme();

        // Reset icon fading state after animation completes
        setTimeout(() => {
            setIconFading(false);
        }, 300);
    };

    // Function to check if a link should be considered active
    const isLinkActive = (linkHref) => {
        // Exact match for most links
        if (location.pathname === linkHref) {
            return true;
        }

        // Special case for project detail pages
        if (linkHref === '/projects' && location.pathname.startsWith('/projects/')) {
            return true;
        }

        return false;
    };

    // Animation for the active link indicator
    useEffect(() => {
        if (navLinksRef.current.length > 0) {
            // Find the active link, considering both exact matches and project detail pages
            const activeLink = navLinksRef.current.find(
                (ref) => ref && (
                    ref.getAttribute('data-href') === location.pathname ||
                    (ref.getAttribute('data-href') === '/projects' && location.pathname.startsWith('/projects/'))
                )
            );

            if (activeLink && indicatorRef.current) {
                // Start animation and immediately apply animated class for consistent text color
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
                            className={`nav-link ${isLinkActive(link.href)
                                ? 'nav-link-active nav-link-animated'
                                : ''
                                }`}
                            ref={(el) => (navLinksRef.current[index] = el)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Theme Toggle Button */}
                <button
                    onClick={handleToggleTheme}
                    className="theme-toggle-button"
                    aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
                >
                    {currentTheme === 'light' ? (
                        <FaMoon className={`theme-icon ${iconFading ? 'fade-out' : 'fade-in'}`} />
                    ) : (
                        <FaSun className={`theme-icon ${iconFading ? 'fade-out' : 'fade-in'}`} />
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
                            className={`nav-link ${isLinkActive(link.href) ? 'nav-link-active nav-link-animated' : ''}`}
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