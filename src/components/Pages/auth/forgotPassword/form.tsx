import React, { useState } from 'react'

import Input from '../../../shared/input/input'


const RESET_PASSWORD ='Reset Password'

function Form() {

    const [state,setState] = useState<string>('');
  return (
    <form
        style={{
            marginBottom:'32px'
        }}>
            <Input
                sx={{width:'100%'}}
                label={RESET_PASSWORD}
                setValue={setState}/>
    </form>
  )
}

export default Form