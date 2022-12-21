import React from 'react'


import {
    Divider as MuiDivider,
    DividerProps,
    styled,

} from '@mui/material';

function Divider(props:DividerProps) {
  return (
    <CustomDivider
    
        {...props}/>        
  )
}

export default Divider



const CustomDivider = styled(MuiDivider)(({theme})=>({
        color:theme.paletteColor.neutral['10'],
}))
