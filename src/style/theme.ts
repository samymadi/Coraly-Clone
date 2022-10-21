import {
  createTheme,
}   from '@mui/material/styles';



const PaletteLight = {
  primaryDefault:'#F93E6C',
  primaryHover:'#E03861',
  primaryActive:'#C73256',
  primaryDisabled:'#FC9FB6',
  
  secondaryDefault:'#2CCFBC',
  secondaryHover:'#28BAA9',
  secondaryActive:'#23A696',
  secondaryDisabled:'#96E7DE',


  actionSecondaryDefault:'#04385A'
}


const lightThemeObject = {
  paletteColor:{
    primary:{
      default:PaletteLight.primaryDefault,
      
      
    },
    secondary:{
      default:PaletteLight.secondaryDefault
    },

    neutral:{
      '90':"#464356",
      "70":"#6F6D7B",
      "80":"#5A5869",
      
    },

    actionSecondary:{
        default:PaletteLight.actionSecondaryDefault
    }
    
    
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

