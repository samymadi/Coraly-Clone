import React from 'react'


import {
    Stack,
    StackProps,
    styled
} from '@mui/material';


//components 
import MainForm from './mainForm/mainForm';
import FieldPhaseForm from './fieldPhaseForm/FieldPhaseForm';
import Divider from '../../divider/divider';

function AddNewContractsbody(props:StackProps) {
  return (
    <Container
        {...props}>
          <MainForm/>
          <Divider orientation='vertical'/>
          <FieldPhaseForm/>
    </Container>
  )
}

export default AddNewContractsbody


const Container  = styled(Stack)(({})=>({
      position:'relative',
      flex:'0.95',
      flexDirection:'row',
      overflowY:'scroll',
      
      
      
}))