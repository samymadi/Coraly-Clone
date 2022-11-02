import React from 'react'



import {
    Stack,
    styled
} from '@mui/material';


import Phase2Form from './Phase2Form';
import NewContractForm from './NewContractForm';
import StartForm from './StartForm';
import Typography from '../../../shared/typography/typography';


const Field_Phase ='Fields’ Phase'


function FieldPhaseForm() {
  return (
    <Container>
        <Typography
          sx={{
            fontWeight:'700',
            fontSize:'18px'
          }}>
            {Field_Phase}
        </Typography>
        <Phase2Form/>
        <NewContractForm/>
        <StartForm/>
    </Container>
  )
}

export default FieldPhaseForm


const Container  = styled(Stack)(({})=>({
    flex:'1',
    paddingLeft:'16px',
    gap:'24px',
    overflowY:'scroll',
    
}))