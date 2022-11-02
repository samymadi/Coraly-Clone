import React from 'react';


//material ui
import {
   ThemeProvider 
} from '@mui/material/styles';


// material ui themes
import {
  lightTheme
} from './style/theme';



//redux
import { 
  Provider as StoreProvider,
} from 'react-redux';


//redux store

import store from './store/store';







//routing 
import Routing from './navigation/routing/Routing';



function App() {

  

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={lightTheme}>
            <Routing/>
      </ThemeProvider>
    </StoreProvider>  
  );
}

export default App;
