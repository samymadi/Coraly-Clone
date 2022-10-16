import React from 'react';
import { ThemeProvider } from '@mui/material';

import './App.css';



//themes
import {
  lightTheme
} from './style/theme';



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
        
    </ThemeProvider>
  );
}

export default App;
