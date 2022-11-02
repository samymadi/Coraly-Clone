import React from 'react'


import FormLayoutguidLine from '../../../../formLayoutGuidLine/formLayoutGuidLine'
import RadioLabel from '../../../../RadioLabel/RadioLabel';

import {
    RadioGroup
} from '@mui/material';

const GENDER='Gender';
const MALE='Male';
const FEMALE='Female'
const NOT_DECLARED='Not declared'

function Gender() {
  return (
    <FormLayoutguidLine
        label={GENDER}>
            <RadioGroup>
                <RadioLabel  
                    label={MALE}
                    value={MALE}/>
                <RadioLabel  
                    label={FEMALE}
                    value={FEMALE}/>
                <RadioLabel  
                    label={NOT_DECLARED}
                    value={NOT_DECLARED}/>    
            </RadioGroup>
    </FormLayoutguidLine>
  )
}

export default Gender