import React from 'react'

import { 
  styled ,
  Typography,
  TypographyProps
} from '@mui/material';



function CustomLabelContract({
  color,
  ...rest
}:TypographyProps) {
  return (
    <Container
      sx={{
        backgroundColor:`${color}33`,
        color
      }}
      {...rest}>

    </Container>
  )
}

export default CustomLabelContract


const Container  = styled(Typography)(({})=>({
      padding:'2.75px 4px',
      fontSize:'12px',
      fontWeight:'600',
      lineHeight:'16px',
      borderRadius:'4px',
      minWidth:'13px',
      textAlign:'center',
      marginRight:'3px'
}))