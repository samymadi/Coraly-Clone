import React,{
    memo,
    PropsWithChildren,
} from 'react'



//material ui
import { 
    Stack,
    StackProps
} from '@mui/material'

import {styled} from '@mui/material/styles';

import {ReactComponent as LoginBackground } from '../../assets/backgrounds/authBackground3.svg';



//components
import FormLayout from './FormLayout';

//types
interface LoginLayoutProps extends PropsWithChildren{
   style?:StackProps,
   backgroundWrapperStyle? : StackProps
   background?:JSX.Element,

}

type LoginLayoutComponent = React.FC<LoginLayoutProps>

const LoginLayout : LoginLayoutComponent = ({
    children,
    style,
    background,
    backgroundWrapperStyle
})=> {
  return (
    <LayoutStack
        {...style}
    >
      <FormLayout>
         {children}
      </FormLayout>
      <BackgroundImageWrapper
          {...backgroundWrapperStyle}
      >
        {background}
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