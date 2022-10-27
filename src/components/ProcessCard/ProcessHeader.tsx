import React from 'react'


import {
    Stack as MuiStack,
    styled,
    IconButton as MuiIconButton,
} from '@mui/material'



import {ReactComponent as Menu} from '../../assets/icons/Menu.svg';
import {ReactComponent as Lock} from '../../assets/icons/Lock.svg';



function ProcessHeader() {
  return (
    <Stack>
        <IconButton>
            <Lock
                fill="white"
                width='12px'/>
        </IconButton>
        <IconButton>
            <Menu
                fill="white"
                width='13px'
                height='13px'/>
        </IconButton>
    </Stack>
  )
}

export default ProcessHeader


const Stack  = styled(MuiStack)(({theme})=>({
    flexDirection:'row',
    justifyContent:'space-between',

}))


const IconButton = styled(MuiIconButton)(({theme})=>({
    "&.MuiButtonBase-root":{
        "&.MuiIconButton-root:hover":{
            backgroundColor:'inherit',
        }
    }
}))