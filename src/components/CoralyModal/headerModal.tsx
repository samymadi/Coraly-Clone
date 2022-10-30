import React from 'react'


import { 
    styled,
    Stack, 
    SxProps,
    Theme,
    StackProps,
    Typography
} from '@mui/material'


interface IHeaderModalProps{
    typoStyle?:SxProps<Theme>
    actions?:JSX.Element
}   

const  HeaderModal:React.FC<StackProps &  IHeaderModalProps> = ({
    typoStyle,
    children,
    actions,
    ...rest
})=> {
  return (
    <StyledStack
        {...rest}>
        <StyledTypo
            sx={typoStyle}>
            {children}
        </StyledTypo>
        {actions}
    </StyledStack>
  )
}

export default HeaderModal



const StyledStack = styled(Stack)(()=>({
    flexDirection:'column',
    justifyContent:'space-between',
    marginBottom:'24px',
}))


const StyledTypo = styled(Typography)(({theme})=>({
    fontSize:'20px',
    fontWeight:'700',
    lineHeight:'36px',
    color:theme.paletteColor.neutral['90']
}))