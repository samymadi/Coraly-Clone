import React, { 
    useState 
} from 'react'

import FormLayoutguidLine from '../../../formLayoutGuidLine/formLayoutGuidLine'
import Input from '../../../shared/input/input'
import Radio from '../../../shared/radio/radio'
import CheckBoxLabel from '../../../shared/checkBoxLabel/checkBoxLabel'

import RadioLabel from '../../../RadioLabel/RadioLabel'

import {
    RadioGroup,
} from '@mui/material'


const  COMPANY_DATA='Company data'
const  COMPANY_NAME ='Company name';
const  SURNAME = 'Surname'
const  COMPANY='Company'
const  PERSON='Person'

function CompanyData() {

    const [state,setState]=useState<string>('');
    const [state2,setState2]=useState<string>('');
    
  return (
    <FormLayoutguidLine
        sx={{}}
        label={COMPANY_DATA}
        guidline
        >
            <Input
                label={COMPANY_NAME}
                value={state}
                setValue={setState}/>
            <Input
                label={SURNAME}
                value={state2}
                setValue={setState2}/>   

            <RadioGroup>
            <RadioLabel  
                    label={COMPANY}    
                    value={COMPANY}/>
            <RadioLabel  
                    label={PERSON}
                    value={PERSON}/>
                
                
            </RadioGroup>     
    </FormLayoutguidLine>
  )
}

export default CompanyData