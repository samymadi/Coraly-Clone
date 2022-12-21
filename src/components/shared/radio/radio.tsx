import React from 'react'


import {
    Radio as MuiRadio, 
    RadioProps as MuiRadioProps, 
    styled
} from '@mui/material'


interface IRadio{

}


export type RadioProps = MuiRadioProps & IRadio

function Radio({
    ...rest
}:RadioProps) {
  return (
    <CustomRadio
            {...rest}
        />
        
  )
}

export default Radio



const CustomRadio = styled(MuiRadio)(({theme})=>({
    "&.Mui-checked":{
        color:theme.paletteColor.primary.default
    }
}))