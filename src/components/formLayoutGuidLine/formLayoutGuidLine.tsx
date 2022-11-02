import React from 'react'



import {
    Stack,
    styled,
    Typography  as MuiTypography,
    StackProps,
    SxProps,
    Theme
} from '@mui/material';


import Guidline from './guidline';

import { 
    Text 
} from '../../_types/basicType';


interface IFormLayoutguidLine{
    label:Text
    typoStyle?:SxProps<Theme>
    guidline?:boolean
    guidlineIcon?:JSX.Element
    formStyle?:SxProps<Theme>

}

function FormLayoutguidLine({
    children,
    label,
    guidline,
    guidlineIcon,
    formStyle,
    typoStyle,
    ...rest
}:StackProps & IFormLayoutguidLine ) {
  return (
    <Container
        {...rest}>
            <Typography
                sx={typoStyle}>
                    {label}
            </Typography>
            <Wrapper>
                {guidline && <Guidline
                                 icon={guidlineIcon}/> }
                <Form
                    sx={formStyle}>
                 {children}
                </Form>
            </Wrapper>
    </Container>
  )
}

export default FormLayoutguidLine


const Container = styled(Stack)(({})=>({
    
}))


const Wrapper = styled(Stack)(({})=>({
        flexDirection:'row',
}))


const Form = styled('form')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    height:'fit-content',
    gap:'16px',
    flex:1
}))

const Typography = styled(MuiTypography)(({theme})=>({
        fontWeight:'600',
        fontSize:'16px',
        lineHeight:'24px',
        marginBottom:'16px',
        color:theme.paletteColor.neutral['90']
}))  