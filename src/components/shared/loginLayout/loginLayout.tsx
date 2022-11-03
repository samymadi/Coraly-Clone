import React,{
  FunctionComponent,
    memo,
    PropsWithChildren,
    SVGProps,
} from 'react'



//material ui
import { 
    Stack,
    StackProps,
    SxProps,
    Theme
} from '@mui/material'

import {styled} from '@mui/material/styles';


//components
import FormLayout from './FormLayout';

//types
interface LoginLayoutProps extends PropsWithChildren{
   style?:SxProps<Theme>,
   backgroundWrapperStyle? : SxProps<Theme>
   background:FunctionComponent<SVGProps<SVGSVGElement>>,
   formLayoutStyle?:SxProps<Theme>

}

type LoginLayoutComponent = React.FC<LoginLayoutProps>

const LoginLayout : LoginLayoutComponent = ({
    children,
    style,
    background:Background,
    backgroundWrapperStyle,
    formLayoutStyle
})=> {
  return (
    <LayoutStack
        sx={style}
    >
      <FormLayout
        sx={formLayoutStyle}
      >
         {children}
      </FormLayout>
      {/* <BackgroundImageWrapper
          sx={backgroundWrapperStyle}
      > */}
            <Background
            style={{}}
              />

      {/* </BackgroundImageWrapper> */}
    </LayoutStack>
  )
}

export default memo(LoginLayout)




const LayoutStack = styled(Stack)(({theme})=>({
  // position:'absolute',
  // inset:0,
  flexDirection:'row',
  height:'100vh',
  // width:'100%',
  "&  ::-webkit-scrollbar":{
    display:'none',
  }
}))


const BackgroundImageWrapper = styled(Stack)(({theme})=>({
    flex:0.7,
}))

