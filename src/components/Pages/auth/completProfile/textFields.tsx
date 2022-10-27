import React,{
    useState,
} from 'react'


import { 
    Stack, 
    styled
} from '@mui/material';



import Input from '../../../shared/input/input';

const NAME='Name';
const SURNAME='Surname';
const PASSWORD='Passowrd';
const REPEAT_PASSWORD='Repeat Password'


function TextFields() {

    const [state1,setState1]=useState<string>('');
    const [state2,setState2]=useState<string>('');
    const [state3,setState3]=useState<string>('');
    const [state4,setState4]=useState<string>('');
    const [state5,setState5]=useState<string>('');


  return (
    <Stack>
        <WrapperStack>
            <CustomInput
                label={NAME}
                setValue={setState1}/>
            <CustomInput
                label={SURNAME}
                setValue={setState1}
                />    
                
        </WrapperStack>

        <Input
            label={PASSWORD}
            setValue={setState1}
            sx={{
                marginBottom:'25px'
             }} />
        <Input
            label={REPEAT_PASSWORD}
            setValue={setState1}
               />        
    </Stack>
  )
}

export default TextFields



const WrapperStack = styled(Stack)(({theme})=>({
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:'25px',
    
}))

const CustomInput = styled(Input)(({})=>({

    "&.MuiTextField-root":{
            color:'red',
            width:'47%'
    }
}))