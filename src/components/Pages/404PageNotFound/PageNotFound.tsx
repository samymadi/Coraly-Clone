import React from 'react'


import {
    styled,
    Stack,
} from '@mui/material';

import Number404 from './number404';
import CustomButtonIconLabel from '../../shared/CustomButtonIconLabel/CustomButtonIconLabel';
import Description from './description'

import { 
    useHistory 
} from 'react-router-dom';

const GO_BACK='Go back'

function PageNotFound() {

    const {
        goBack
    } = useHistory();

    const onClick = ()=>{
        goBack();
    }
  return (
    <Container>
        <Number404/>
        <Description/>
        <CustomButtonIconLabel
            onClick={onClick}
            size='large'
            sx={{
                width:'fit-content'
            }}
            color='info'
            >
                {GO_BACK}
        </CustomButtonIconLabel>
    </Container>
  )
}

export default PageNotFound



const Container = styled(Stack)(({})=>({
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    width:'42%',
    left: '50%',
    top:'50%',
    transform:"translate(-50%, -50%)",
    gap:'16px'

}))