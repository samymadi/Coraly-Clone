import React from 'react'


import {
    Stack,
    StackProps,
    styled
} from '@mui/material';



import HeaderForm from '../../headerForm/headerForm';
import StartformName from './StartformName';
import CompanyData from './companyData';
import Gender from './gender';

function MainForm() {
  return (
    <Container>
        <HeaderForm/>
        <StartformName/>
        <CompanyData/>
        <Gender/>
    </Container>
  )
}

export default MainForm



const Container  = styled(Stack)(({})=>({
    flex:'1',
    paddingRight:'16px',
    overflowY:'scroll',
    maxHeight:'100%',
    paddingBottom:'30px',
    gap:"16px",
    "&::-webkit-scrollbar":{
      display:'block !important',
    }

}))