import {
    createTheme,
    Theme,
}   from '@mui/material';



declare module '@mui/material/styles' {
  interface Theme {
    primary: {
      danger: string;
    };
    secondary:{

    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    primary?: {
     
    };
    secondary?:{

    }
  }
}

const PaletteLight = {
    primaryMain:'#F93E6C',
    primaryHover:'#E03861',
    primaryActive:'#C73256',
    primaryDisabled:'#FC9FB6',

    secondaryMain:'#2CCFBC',
    secondaryHover:'#28BAA9',
    secondaryActive:'#23A696',
    secondaryDisabled:'#96E7DE'
}


export const lightTheme :Theme =  createTheme({
    palette:{
        primary:{
            main:PaletteLight.primaryMain,

        
        },
        secondary:{
            main:PaletteLight.secondaryMain
        },
    },

    typography:{
      fontFamily:['Inter'].join(''),
    }
    
})