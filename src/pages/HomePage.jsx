import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import '../styles/pages.css';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="page-loading">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <main>
            <Hero />
        </main>
    );
};

export default HomePage;