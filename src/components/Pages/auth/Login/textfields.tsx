import React, {
   useState 
} from 'react'

  import { 
    styled 
} from '@mui/material/styles'

import {
    Stack, 
    StackProps
} from '@mui/material';


import Input from '../../../shared/input/input'

import Snackbar from '../../../shared/snackbar/snackbar';




const EMAIL='Email'
const PASSWORD='Password'


const TextFields:React.FC<StackProps> = (props)=> {

    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    
  return (
    <Container  
       {...props}>
                <Input
                    sx={{marginBottom:'24px'}}
                    setValue={setEmail}
                    label={EMAIL}/>
                <Input 
                    label={PASSWORD}
                    setValue={setPassword}
                    type='password'/>
                

    </Container>
  )
}

export default TextFields



const Container = styled(Stack)(()=>({

}))