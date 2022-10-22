import React from 'react'


import { 
    styled,
    SxProps,
    Theme,
    Typography,
    TypographyProps
 } from '@mui/material'


import Link,{
    LinkProps
} from '../Link/link'

interface ITextRedirectionProps{
    label?:string | number
    typoStyle?:SxProps<Theme>
} 


type TextRedirectionProps = ITextRedirectionProps & LinkProps 

const TextRedirection :React.FC<TextRedirectionProps> = ({
    label,
    typoStyle,
    ...rest
})=> {
  return (
    <Link 
        {...rest}>
        <StyledTypography
            sx={typoStyle}>
            {label}
        </StyledTypography>
    </Link>
  )
}

export default TextRedirection



const StyledTypography = styled(({children,...rest}:TypographyProps)=>(
    <Typography
        {...rest}>
        {children}
    </Typography>
))(({theme})=>({
        color:theme.paletteColor.secondary.default,
        fontWeight:"600",
        fontSize:'14px',
        lineHeight:'21px'
}))