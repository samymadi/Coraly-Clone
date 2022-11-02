import React,{
  useEffect,
  useState,
  Fragment
} from 'react'



import {
  Stack,
  styled,
} from '@mui/material';

import CoralyModal from '../../../CoralyModal/CoralyModal'
import HeaderModal from '../../../CoralyModal/headerModal';
import ActionsHeader from './actionsHeader';
import Footer from '../footer/footer';
import AddNewContractsbody from '../body/AddNewContractsbody';


const EMAIL='Courtney@mail.com'

function AddContractsModal() {
  const [state,setState] = useState<boolean>(true);

  return (
    <CoralyModal
      containerStyle={{
        width:'88%',
        left:'53.2%',
        height:'89%'
      }}
      open={state}
      setOpen={setState}>
        <Container>
            <HeaderModal
                actions={<ActionsHeader/>}>
                {EMAIL}
            </HeaderModal>
            <AddNewContractsbody/>
            <Footer/>
        </Container>
    </CoralyModal>
  )
}

export default AddContractsModal



const Container = styled(Stack)(({})=>({
    maxHeight:'100%',
    height:'100%',
    justifyContent:'space-between',
    "& ::-webkit-scrollbar ":{
      display:'none',
    }
    
}))