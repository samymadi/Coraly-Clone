import React, { 
    PropsWithChildren
 } from 'react'


//material ui
import {
    Stack,
    StackProps
} from '@mui/material';

//styled engine
import styled from '@emotion/styled';

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
            style={{
                    marginBottom:'60',
                    minHeight:'50px'
                    }}/>
        {children}
    </FormLayoutStack>
  )
}

export default FormLayout



const FormLayoutStack = styled(Stack)(()=>({
   flexDirection:'column',
   overflowY:'scroll',
   padding:'60px 60px',
}))