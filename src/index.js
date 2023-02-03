import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#52006A",
    },
    secondary: {
      main: "#52006A",
    }
  },
  typography: {
    
  }
});


root.render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  // </React.StrictMode>
);

