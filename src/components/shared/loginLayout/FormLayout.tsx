import React, { 
    PropsWithChildren
 } from 'react'


//material ui
import {
    Stack,
} from '@mui/material';

//styled engine
import styled from '@emotion/styled';

//assets
import {ReactComponent as Logo} from '../../../assets/logos/smallLogo.svg';

export interface FormLayoutProps extends PropsWithChildren{

}

export type FormLayoutComponent  = React.FC<FormLayoutProps>


const  FormLayout:FormLayoutComponent = ({
    children,
})=> {
  return (
    <FormLayoutStack>
        <Logo 
            style={{marginBottom:'60'}}/>
        {children}
    </FormLayoutStack>
  )
}

export default FormLayout



const FormLayoutStack = styled(Stack)(()=>({
   flexDirection:'column',
   padding:'80px 100px'
}))