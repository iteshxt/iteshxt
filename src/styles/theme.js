// Theme configuration file for the portfolio website
// Contains color schemes for light and dark modes based on the PRD

const theme = {
  light: {
    background: '#F6F4FF',
    surface: '#ECE6FA',
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
    gradient: 'linear-gradient(90deg, #B980F2, #9B6EF3)',
  },
  dark: {
    background: '#141218',
    surface: '#1D1B24',
    text: {
      primary: '#EDEBFF', 
      secondary: '#B4B0CF',
    },
    accent: {
      primary: '#CBA0FC',
      secondary: '#9B6EF3',
      tertiary: '#2C2636',
    },
    border: '#2A2A2A',
    hover: '#2C2636',
    gradient: 'linear-gradient(90deg, #CBA0FC, #4B2B78)',
  }
};

// Function to get CSS variables for the current theme
export const getThemeVariables = (mode = 'light') => {
  const currentTheme = theme[mode] || theme.light;
  
  return {
    '--background': currentTheme.background,
    '--surface': currentTheme.surface,
    '--text-primary': currentTheme.text.primary,
    '--text-secondary': currentTheme.text.secondary,
    '--accent-primary': currentTheme.accent.primary,
    '--accent-secondary': currentTheme.accent.secondary,
    '--accent-tertiary': currentTheme.accent.tertiary,
    '--border-color': currentTheme.border,
    '--hover-color': currentTheme.hover,
    '--gradient': currentTheme.gradient,
  };
};

export default theme;