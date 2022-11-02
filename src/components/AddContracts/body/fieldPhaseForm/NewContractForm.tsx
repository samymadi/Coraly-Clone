import React,{
    useState
} from 'react'


import FormCollapse from '../../../formCollapse/formCollapse'
import Container from './Container'
import Input from '../../../shared/input/input'


const START_DATE ='Start date'
const NEW_CONTRACT='New Contract'

function NewContractForm() {

    const [state,setState] = useState<string>('07/10/21');
  return (
    <FormCollapse
        label={NEW_CONTRACT}>
            <Container>
            <Input
                    value={state}
                    setValue={setState}
                    disabled
                    label={START_DATE}/>   
            </Container>
    </FormCollapse>
  )
}

export default NewContractForm