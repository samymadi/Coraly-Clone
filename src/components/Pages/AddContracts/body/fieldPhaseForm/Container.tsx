import React from 'react'

import {
    StackProps,
    Stack,
    styled
} from '@mui/material'



function Container(props:StackProps) {
  return (
    <StackContainer
        {...props}/>
  )
}

export default Container



const StackContainer = styled(Stack)(({})=>({
        padding:'16px 0px 8px 16px ',
        gap:'14px'
}))