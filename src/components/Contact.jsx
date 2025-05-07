import { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    const formRef = useRef(null);

    // Initialize EmailJS with your user ID
    useEffect(() => {
        emailjs.init("_wY5aajq4Kb3QguKO"); // Your EmailJS Public API key
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Get current date and time for email template
        const now = new Date();
        const formattedTime = now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Prepare template parameters to send to EmailJS
        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            time: formattedTime,
            to_name: personalInfo.fullName
        };

        try {
            // Send the email using EmailJS
            await emailjs.send(
                "service_i977fd6", // Replace with your actual EmailJS Service ID once you create one
                "template_7astiue", // Replace with your actual EmailJS Template ID once you create one
                templateParams
            );

            setSubmitStatus('success');
            setSubmitMessage('Thank you! Your message has been sent successfully.');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitMessage('');
                setSubmitStatus('');
            }, 5000);
        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus('error');
            setSubmitMessage('Oops! Something went wrong. Please try again.');

            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitMessage('');
                setSubmitStatus('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="section-title">
                    Get In Touch
                </h2>


                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info-card">
                        <h3 className="card-title">
                            Contact Information
                        </h3>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="info-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="info-content">
                                    <h4>Location</h4>
                                    <p>{personalInfo.location}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <a href={`mailto:${personalInfo.email}`}>
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FaPhone />
                                </div>
                                <div className="info-content">
                                    <h4>Phone</h4>
                                    <a href={`tel:${personalInfo.phone}`}>
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FaLinkedinIn />
                                </div>
                                <div className="info-content">
                                    <h4>LinkedIn</h4>
                                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                        Connect with me
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FaGithub />
                                </div>
                                <div className="info-content">
                                    <h4>GitHub</h4>
                                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                                        View my projects
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">
                        <h3 className="card-title">
                            Send Me a Message
                        </h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Full Name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email Address <span>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">
                                    Subject <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    Your Message <span>*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="form-textarea"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>

                            {submitMessage && (
                                <div className={`form-message ${submitStatus === 'success' ? 'success' : 'error'}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
