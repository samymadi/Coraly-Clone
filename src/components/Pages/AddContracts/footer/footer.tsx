import React from 'react'


import {
  Stack,
  styled,
}from '@mui/material';



import FooterActions from './footerActions';
import TextId from './textId';

function Footer() {
  return (
    <Container>
        <TextId/>
        <FooterActions/>
    </Container>
  )
}

export default Footer



const Container = styled(Stack)(({})=>({
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  flex:'0.05'
}))