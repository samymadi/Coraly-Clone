import React, {
   useState 
} from 'react'

  import { 
    styled 
} from '@mui/material/styles'

import {
    Stack
} from '@mui/material';


import Input from '../../shared/input/input'



const EMAIL='Email'
const PASSWORD='Password'

function TextFields() {

    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    
  return (
    <Container>
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