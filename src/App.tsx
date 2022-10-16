import React from 'react';
import { ThemeProvider } from '@mui/material';

import './App.css';



//themes
import {
  lightTheme
} from './style/theme';


//routing 
import Routing from './components/routing/Routing';



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
          <Routing/>
    </ThemeProvider>
  );
}

export default App;
