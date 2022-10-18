import {
  createTheme,
}   from '@mui/material/styles';



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


const lightThemeObject = {
  paletteColor:{
    primary:{
      main:PaletteLight.primaryMain,
      
      
    },
    secondary:{
      main:PaletteLight.secondaryMain
    },

    neutral:{
      '90':"#464356",
      "70":"#6F6D7B"
    },
    
    
  },

 
  
  backgroundImage:'',
  
  typography:{
    fontFamily:['Inter'].join(''),
  }
}

type LightThemeType = {
  [Key in keyof typeof lightThemeObject]: typeof lightThemeObject[Key]
}




declare module '@mui/material/styles' {

  
interface Theme extends  LightThemeType {}

interface ThemeOptions extends LightThemeType{}

    
}


export const lightTheme =  createTheme(lightThemeObject)

