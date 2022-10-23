import React from 'react'


import {
    FormControlLabel,
    FormControlLabelProps,
    styled
} from '@mui/material'; 


interface CheckBox{
}

type CheckBoxLabelProps = FormControlLabelProps & CheckBox;

const CheckBoxLabel:React.FC<CheckBoxLabelProps> = ({
    ...props
})=> {
  return (
    <LabelCheckBox
        labelPlacement="end"
        {...props}
    />
        
  )
}

export default CheckBoxLabel




const LabelCheckBox = styled((props:FormControlLabelProps)=>

        <FormControlLabel         
        {...props}/>
)
        
(({theme})=>({

  
  "&.MuiFormControlLabel-root":{
    marginRight:'0',

  },

  "& span":{
    "&.MuiFormControlLabel-label":{
      fontSize:'14px',
      fontWeight:'400',
      color:theme.paletteColor.neutral['100'],
    }
    
  }
}))