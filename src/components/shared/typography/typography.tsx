import React, { Children } from 'react'


import {
    Typography as TypographyMaterial,
    TypographyProps,
    styled
} from '@mui/material';


export type TypographyComponenntProps = ITypographyProps &  TypographyProps

const  Typography :React.FC<TypographyComponenntProps> = ({
    children,
    ...rest
})=> {
  return (
    <StyledTypography
        {...rest}>
        {children}
    </StyledTypography>
  )
}

export default Typography

interface ITypographyProps {

}


const StyledTypography = styled(({children,...rest}:TypographyProps)=>(
    
    <TypographyMaterial
        {...rest}>
        {children}
    </TypographyMaterial>
))(({theme})=>({

}))