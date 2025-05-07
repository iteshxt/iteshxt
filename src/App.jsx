import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import { getThemeVariables } from './styles/theme';
import './App.css';

function App() {
  // Changed default theme from 'light' to 'dark'
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for system preference but only apply if no saved preference exists
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // Only switch to light if system explicitly prefers it and no saved preference
      setTheme('light');
    }
    // If no saved preference and system doesn't prefer light, dark remains as default
  }, []);

  // Rest of the component remains unchanged
  useEffect(() => {
    const themeVariables = getThemeVariables(theme);
    Object.entries(themeVariables).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Rest of the component remains unchanged
  return (
    <Router>
      <ScrollToTop /> {/* Added ScrollToTop component here */}
      <div className="App">
        <Navbar currentTheme={theme} toggleTheme={toggleTheme} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
