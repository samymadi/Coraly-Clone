import React from 'react'


import {
    styled,
    Typography as MuiTypography,
    TypographyProps
} from '@mui/material';




function TypoCell(props:TypographyProps) {
  return (
    <Typography {...props} />
  )
}

export default TypoCell



const Typography = styled(MuiTypography)(({theme})=>({
    color:theme.paletteColor.neutral['100'],
    fontWeight:'400',
    fontSize:'14px',
    lineHeight:'18px',
    
  }))