import React from 'react'


import {
    Stack,
    styled,
    useTheme,
  
} from '@mui/material';


import Divider from '../divider/divider';


import {ReactComponent as Document} from '../../assets/icons/document.svg'
import { StackProps } from '@mui/system';


interface IGuidline{
    icon?:JSX.Element
}

function Guidline({
    icon,
    ...rest
}:StackProps & IGuidline) {

  const {
    neutral
  } = useTheme().paletteColor
  return (
      <Container>
        { icon || <Document/>}
        <Divider
            sx={{
              height:'80%'
            }}
            orientation='vertical'/>
    </Container>
  )
}

export default Guidline



const Container = styled(Stack)(({theme})=>({
    alignItems:'center',
    marginRight:'15px',
    "& svg":{
      fill:theme.paletteColor.neutral['50'],
      marginBottom:'10px',
    }
}))