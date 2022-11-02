import React from 'react'
import CheckBoxLabel from '../shared/checkBoxLabel/checkBoxLabel'

import { 
    SxProps, 
    Theme,
    styled,
     
} from '@mui/material'

import Radio,{
    RadioProps
} from '../shared/radio/radio'

interface IRadioLabelProps {
    containerStyle?:SxProps<Theme>
    label?:React.ReactNode
}


function RadioLabel({
    containerStyle,
    label,
    ...rest
}:RadioProps & IRadioLabelProps) {
  return (
   
            <CustomRadioLabel  
                     label={label}
                     sx={containerStyle}
                     control={<Radio  
                                    {...rest}  />}
                    />
  )
}

export default RadioLabel





const CustomRadioLabel = styled(CheckBoxLabel)(({theme})=>({
    width:'fit-content',
    marginLeft:'-6px',
    "& .MuiButtonBase-root":{
        padding:'4px',
        marginRight:'10px',
        
    }
}))

