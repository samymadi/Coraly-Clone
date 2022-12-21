import React,{
  useEffect,
  useState,
} from 'react';


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

  const [state,setState] = useState<{name:string,age?:number}>({name:'sam'});


  useEffect(()=>{
    setState(()=>{
      return {name:'madi'};
    });
    console.log(state);
  },[])

  

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={lightTheme}>
            <Routing/>
      </ThemeProvider>
    </StoreProvider>  
  );
}

export default App;
