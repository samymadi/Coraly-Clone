import React from 'react'



import {
    styled,
    IconButton as MuiIconButton,
    IconButtonProps,
} from '@mui/material'

function IconButton(props:IconButtonProps) {
  return (
    <CustomIconButton
            {...props}/>
        
  )
}

export default IconButton




const CustomIconButton =styled(MuiIconButton)(({theme})=>({
         "& svg":{
            fill:theme.paletteColor.neutral['50']
         }
})) 