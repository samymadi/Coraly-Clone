import React,{
    memo
} from 'react'



//material ui
import { 
    Stack,
} from '@mui/material'

import {ReactComponent as LoginBackground } from '../../assets/backgrounds/authBackground3.svg';
import back from '../../assets/backgrounds/Frame 11.jpg'
import styled from '@emotion/styled';

function LoginLayout() {
  return (
    <LayoutStack>
    <div style={{flex:1}}>
      sam
    </div>
      <BackgroundImageWrapper>
        <LoginBackground   viewBox={''} />
        {/* <img src={back} alt="" height={'100%'} width={'880'} /> */}

      </BackgroundImageWrapper>
    </LayoutStack>
  )
}

export default memo(LoginLayout)




const LayoutStack = styled(Stack)(({theme})=>({
  position:'absolute',
  inset:0,
    flexDirection:'row',
    height:'100vh',
    flex:0.3
}))


const BackgroundImageWrapper = styled(Stack)(({theme})=>({
    height:'100vh',
    flex:0.7    
}))