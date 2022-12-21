import React,{
    useState,
    Fragment,
} from 'react'


import FormCollapse from '../../../../formCollapse/formCollapse'
import Input from '../../../../shared/input/input'
import Container from './Container';


const PHASE_2='Phase 2'
const CONTRACT_NUMBER='Contract number'
const CONTRACT_NUMBER_2='Contract number 2'

function Phase2Form() {

    const [state,setState] = useState<string>('');
    const [state1,setState1] = useState<string>('');

  return (
    <FormCollapse
        label={PHASE_2}
        ready>
            <Container>
                <Input
                    value={state}
                    setValue={setState}
                    label={CONTRACT_NUMBER}/>
                <Input
                    value={state1}
                    setValue={setState1}
                    label={CONTRACT_NUMBER_2}/>    
            </Container>

    </FormCollapse>
  )
}

export default Phase2Form