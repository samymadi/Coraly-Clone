import React from 'react';
import {
   ThemeProvider 
} from '@mui/material/styles';




//themes
import {
  lightTheme
} from './style/theme';


//routing 
import Routing from './navigation/routing/Routing';



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
          <Routing/>
    </ThemeProvider>
  );
}

export default App;
