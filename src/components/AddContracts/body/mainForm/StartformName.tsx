import React, { 
    useState 
} from 'react'

import FormLayoutguidLine from '../../../formLayoutGuidLine/formLayoutGuidLine'
import Input from '../../../shared/input/input'


const  STARTFORM_NAME='Startform Name'
const EMAIL='Email';
const DESCRITION_TEST='Description test'
const THIS_IS_DESCRIPTION='This is a description';

function StartformName() {

    const [state,setState]=useState<string>('');
    const [state2,setState2]=useState<string>('');
    
  return (
    <FormLayoutguidLine
        label={STARTFORM_NAME}
        >
            <Input
                label={EMAIL}
                type='email'
                value={state}
                setValue={setState}
                />
            <Input
                label={DESCRITION_TEST}
                value={state2}
                setValue={setState2}
                helperText={THIS_IS_DESCRIPTION}
                />    
    </FormLayoutguidLine>
  )
}

export default StartformName