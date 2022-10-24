import React from 'react'


import {
    styled 
} from '@mui/material'


import useDrawer from '../../utils/Customhooks/useDrawer';


import {ReactComponent as Logo} from '../../assets/logos/Logo.svg';
import {ReactComponent as SmallLogo} from '../../assets/logos/smallLogo.svg';

function Footer() {

    const {
        open,
    }   = useDrawer();
  return (
    <Container>
        {open ?  <Logo/> 
                : <SmallLogo
                    height='28px'/>  }
    </Container>
  )
}

export default Footer


const Container  = styled('div')(()=>({
    margin:'0 auto',
    marginTop:'70px'
}))