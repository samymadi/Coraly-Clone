import React, { useState } from 'react'

import {
    Stack,

} from '@mui/material';


import Input from '../../../shared/input/input';


const NEW_PASSWORD='New password';
const CONFIRM_NEW_PASSWORD='Confirm new password'

function TextFields() {

    const [state1,setState1] = useState<string>('');
    const [state2,setState2] = useState<string>('');
  return (
    <Stack>
        <Input
            label={NEW_PASSWORD}
            setValue={setState1}
            sx={{
                marginBottom:'32px'
            }}
            />
        <Input
            label={CONFIRM_NEW_PASSWORD}
            setValue={setState1}
            />    
    </Stack>
  )
}

export default TextFields