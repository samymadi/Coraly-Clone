import React, { useState } from 'react'
import { 
    Stack
 } from '@mui/material'

import CheckBoxLabel from '../../shared/checkBoxLabel/checkBoxLabel'
import CheckboxInput from '../../shared/checkBoxLabel/checkboxInput'

import TextRedirection from '../../textRedirection/textRedirection'



const REMEMBE_ME = 'Remember me'
const FORGET_PASSWORD ='Forgot password'

function SessionCondition() {

  const [state,setState] = useState<boolean>(false)
  
  return (
    <Stack
    direction='row'
    alignItems='center'
    justifyContent='space-between'>
        <CheckBoxLabel
            control={<CheckboxInput
                        setValue={setState}/>
                    }
            label={REMEMBE_ME}/>

        <TextRedirection href='tosomewhere'
                         to=''
                         label={FORGET_PASSWORD}
                        />        

    </Stack>
  )
}

export default SessionCondition



