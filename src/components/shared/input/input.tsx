import React,{
    memo
} from 'react'


import { 
    TextFieldProps,
    TextField
} from '@mui/material'


import {
    styled
} from '@mui/material/styles'



interface Props {
    setValue:React.Dispatch<React.SetStateAction<any>>
}


type InputProps = TextFieldProps & Props

const  Input:React.FC<InputProps> = ({
    children,
    setValue,
    ...rest
})=> {


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }

    return (
    <CustomTextField
        variant='outlined'
        onChange={handleChange}
        {...rest}
        data-testid='input'
        />
        
 
  )
}

export default memo(Input)






const CustomTextField = styled((props:TextFieldProps)=>

        <TextField 
            {...props}>
        </TextField>
        )
(({theme})=>{
    
    const {
        default:defaultColor
    } = theme.paletteColor.actionSecondary;

    const {
        neutral
    } = theme.paletteColor

    return {
        width:'100%',
        
    '& label':{
        fontSize:'14px',
        lineHeight:'14px',
    },
    '& label.Mui-focused': {
        fontWeight:'bold',
        color: defaultColor,
      },


    '& .MuiInput-underline:after': {
        borderBottomColor: defaultColor,
    },

    '& .MuiOutlinedInput-root': {
        borderRadius:'8px',
        height:'42px',
        
        
        "& input":{
            fontSize:'14px',
            color:neutral['80'],
        },
        

        '&.Mui-focused fieldset': {
          borderColor: defaultColor,
        },
      },
}})