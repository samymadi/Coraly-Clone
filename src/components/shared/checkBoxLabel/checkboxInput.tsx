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
      '&.Mui-checked': {
        color:theme.paletteColor.primary.default,
      },
      '&.Mui-root':{
        borderRaduis:'3px'
      }
    }))