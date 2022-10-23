import React, { 
    useState 
} from 'react'


import { 
    Stack 
} from '@mui/material'


import Input from '../../shared/input/input'

const WORK_SPACE_NAME='Workspace Name';
const EMAIL='Email'

function Textfields() {

    const [workspace,setWorkspace ] = useState('');
    const [email,setEmail] = useState('');
  return (
    <Stack>
        <Input
            setValue={setWorkspace}
            label={WORK_SPACE_NAME}
            sx={{marginBottom:'24px'}}
        />
        <Input
            setValue={setEmail}
            label={EMAIL}
            sx={{marginBottom:'24px'}}
        />
    </Stack>
  )
}

export default Textfields