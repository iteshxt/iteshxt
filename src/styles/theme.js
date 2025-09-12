// Theme configuration file for the portfolio website
// Contains color schemes for light and dark modes based on the PRD

// Helper function to convert hex to RGB values
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '0, 0, 0';
};

const theme = {
  light: {
    background: '#F6F4FF',
    surface: '#E8DFFC', // Slightly deeper lavender for gradient contrast
    footer: '#D8CCEF', // Distinct footer color with more contrast
    navbar: 'rgba(255, 255, 255, 0.75)', // Semi-transparent white for better contrast
    text: {
      primary: '#2E2B3D',
      secondary: '#514E66',
    },
    accent: {
      primary: '#B980F2',
      secondary: '#C8A2F7',
      tertiary: '#A782D9',
    },
    border: '#D5CCE7',
    hover: '#A782D9',
    gradient: 'linear-gradient(135deg, #F6F4FF 0%, #E8DFFC 100%)',
  },
  dark: {
    background: '#141218',
    surface: '#1F1C28', // Deeper for gradient contrast
    footer: '#2A2636', // Distinct footer color with more contrast
    navbar: 'rgba(20, 18, 24, 0.8)', // Semi-transparent dark for better contrast
    text: {
      primary: '#EDEBFF', 
      secondary: '#B4B0CF',
    },
    accent: {
      primary: '#CBA0FC',
      secondary: '#9B6EF3',
      tertiary: '#4A3B5C', // Lighter tertiary for better contrast
    },
    border: '#2A2A2A',
    hover: '#4A3B5C',
    gradient: 'linear-gradient(135deg, #141218 0%, #1F1C28 100%)',
  }
};

// Function to get CSS variables for the current theme
export const getThemeVariables = (mode = 'light') => {
  const currentTheme = theme[mode] || theme.light;
  
  return {
    '--background': currentTheme.background,
    '--surface': currentTheme.surface,
    '--footer-bg': currentTheme.footer,
    '--navbar-bg': currentTheme.navbar,
    '--text-primary': currentTheme.text.primary,
    '--text-secondary': currentTheme.text.secondary,
    '--accent-primary': currentTheme.accent.primary,
    '--accent-secondary': currentTheme.accent.secondary,
    '--accent-tertiary': currentTheme.accent.tertiary,
    '--border-color': currentTheme.border,
    '--hover-color': currentTheme.hover,
    '--gradient': currentTheme.gradient,
    '--background-gradient': currentTheme.gradient,
    // RGB versions for rgba() usage
    '--background-rgb': hexToRgb(currentTheme.background),
    '--surface-rgb': hexToRgb(currentTheme.surface),
    '--accent-primary-rgb': hexToRgb(currentTheme.accent.primary),
    '--accent-secondary-rgb': hexToRgb(currentTheme.accent.secondary),
    '--text-primary-rgb': hexToRgb(currentTheme.text.primary),
  };
};

export default theme;