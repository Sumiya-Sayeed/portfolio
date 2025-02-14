import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import Layout from './components/Layout';

// Create a dark theme
const theme = createTheme({
  palette: {
    mode: 'dark', // This sets the theme to dark mode
    primary: {
      main: '#8db5f0', // A lighter blue for primary elements
      dark: '#455a64', // A darker blue for primary elements
      light: '#e8f5e9' // A light green for poppers or other elements
    },
    secondary: {
      main: '#f2f9fb', // A light color for secondary elements
      dark: '#37474f' // A darker color for secondary elements
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1e1e1e' // Slightly lighter dark color for paper elements
    },
    text: {
      primary: '#ffffff', // White text for better contrast on dark background
      secondary: '#b3b3b3', // Light grey for secondary text
      info: '#37474f' // White text for better contrast on dark background
    }
  },
  typography: {
    fontFamily: 'sans-serif',
    useNextVariants: true
  }
});

const styles = {
  '@global': {
    'html, body, #root': {
      width: '100%',
      maxWidth: '100vw',
      height: 'auto',
      minHeight: '100vh',
      overflowX: 'hidden',
      padding: 0,
      margin: 0,
      backgroundColor: '#121212' // Dark background color
    }
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);
