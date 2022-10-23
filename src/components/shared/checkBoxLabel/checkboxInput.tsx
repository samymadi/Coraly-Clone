import React from 'react'

import {
    Checkbox, 
    CheckboxProps,
    Theme,
} from '@mui/material';

import {styled} from '@mui/material/styles';


interface CheckBoxInput {
  setValue:React.Dispatch<React.SetStateAction<boolean>>

}


type CheckBoxInputProps = CheckBoxInput & CheckboxProps

const  CheckboxInput:React.FC<CheckBoxInputProps> = ({
  setValue,
  ...rest
})=> {


  const  handleOnChange =  (e:any)=>{
    setValue(e.target.checked);
  }

  return (
    <CheckBox
      onChange={handleOnChange}
      {...rest}
    />
  )
}

export default CheckboxInput



const CheckBox = styled( (props:CheckboxProps)=> 
    <Checkbox {...props}/>)(({theme})=>({
     
      '&.MuiCheckbox-root':{
        borderRaduis:'5px',
        color:theme.paletteColor.neutral['40'],
        
        '&.Mui-checked': {
          color:theme.paletteColor.primary.default,
        },
      },
      '&.MuiCheckbox-root svg':{
        width:'20px',
        height:'20px'
      }
      
    }))