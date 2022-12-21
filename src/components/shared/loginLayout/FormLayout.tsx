import React, { 
    PropsWithChildren
 } from 'react'


//material ui
import {
    Stack,
    StackProps,
    styled,
} from '@mui/material';

//styled engine

//assets
import {ReactComponent as Logo} from '../../../assets/logos/smallLogo.svg';


export type FormLayoutComponent  = React.FC<StackProps>


const  FormLayout:FormLayoutComponent = ({
    children,
    ...rest
})=> {
  return (
    <FormLayoutStack
    {...rest}>
        <Logo 
            className='logo' />
        {children}
    </FormLayoutStack>
  )
}

export default FormLayout



const FormLayoutStack = styled(Stack)(({theme})=>({
   flexDirection:'column',
   overflowY:'scroll',
   padding:'60px 60px',
   "& .logo":{
      marginBottom:'90px',
      marginTop:'50px',
      minHeight:'50px',
      
    [theme.breakpoints.down('lg')]:{
      marginBottom:'50px',
      marginTop:'20px',
      minHeight:'50px',
    }
   }
}))