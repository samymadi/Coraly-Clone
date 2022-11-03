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


  actionSecondaryDefault:'#04385A',

  accentColorSky:'#47BDFF',
  accentColorPurple:'#6C47FF',
  accentColorPink:'#FF47B5',
  accentColorNeonGreen:'#30EF7C',
  accentColorOrange:'#FF9F47',
  accentColorAqua:'#2EF1CE',
  accentColorYellow:'#F6D524',
  accentColorMagenta:'#E547FF',



      stateSuccess:'#34D182',
      stateError:'#FF4339',
      stateWarning:'#F9A55C',
      stateSuccessBg:'#D6FCDA',
      stateErrorBg:'#FFE8DA',
      stateWarningBg:'#FEF4DE'

}


const lightThemeObject = {
  paletteColor:{
    primary:{
      default:PaletteLight.primaryDefault,
      hover:PaletteLight.primaryHover,
      active:PaletteLight.primaryActive,
      disabled:PaletteLight.primaryDisabled
      
      
    },
    secondary:{
      default:PaletteLight.secondaryDefault,
      hover:PaletteLight.secondaryHover,
      active:PaletteLight.secondaryActive,
      disabled:PaletteLight.secondaryDisabled
    },

    neutral:{
      '90':"#464356",
      "70":"#6F6D7B",
      "80":"#5A5869",
      "50":"#9897A1",
      "60":"#83828E",
      "10":"#EAEAEC",
      "20":"#D6D5D9",
      "40":"#A5A5AA",
      "100":"#312E43",
       white:"#FFF",
      
    },

    backgroundColor:{
      default1:'#F6F8FA',
      default2:'rgba(49, 46, 67, 0.32)',
    },

    actionSecondary:{
        default:PaletteLight.actionSecondaryDefault
    },

    accent:{
      sky:PaletteLight.accentColorSky,
      purple:PaletteLight.accentColorPurple,
      pink:PaletteLight.accentColorPink,
      neaoGreen:PaletteLight.accentColorNeonGreen,
      orange:PaletteLight.accentColorOrange,
      aqua:PaletteLight.accentColorAqua,
      yellow:PaletteLight.accentColorYellow,
      magenta:PaletteLight.accentColorMagenta
    },

    states:{
      success:PaletteLight.stateSuccess,
      error:PaletteLight.stateError,
      warning:PaletteLight.stateWarning,
      successBg:PaletteLight.stateSuccessBg,
      errorBg:PaletteLight.stateErrorBg,
      warningBg:PaletteLight.stateWarningBg
    }
    
    
  },
  
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

