import React, { useState } from 'react'



import {
    Stack,
    styled
} from '@mui/material';


import Phase2Form from './Phase2Form';
import NewContractForm from './NewContractForm';
import StartForm from './StartForm';
import Typography from '../../../../shared/typography/typography';


//tabs
import AddContractTabContainer from '../../addContractTabs/addContractTabContainer';
import AddContractsPanel from '../../addContractTabs/addContractsPanel';


const Field_Phase ='Fields’ Phase'



function FieldPhaseForm() {

  const [value,setValue] =useState<number>(0);


  const handleOnChange = (e:React.SyntheticEvent,newValue:number)=>{
    setValue(newValue);
  }

  return (
    <AddContractTabContainer
        onChange={handleOnChange}
        value={value}>
        <AddContractsPanel 
              index={0} 
              value={value}>
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
        </AddContractsPanel>
        <AddContractsPanel
          index={1}
          value={value}/>
    </AddContractTabContainer>
  )
}

export default FieldPhaseForm


const Container  = styled(Stack)(({})=>({
    gap:'24px',
    overflowY:'scroll',
    
}))