import React from 'react'

import {
    Stack,
    StackProps,
    styled,

} from '@mui/material';


interface IGroupWithActions{
    actions?:JSX.Element
}



export type GroupWithActionsProps = IGroupWithActions & StackProps;

function GroupWithActions({
    children,
    actions,
    ...rest
}:GroupWithActionsProps) {
  return (
    <Container
        {...rest}>
            {children}
            {actions}
    </Container>
  )
}

export default GroupWithActions


const Container  = styled(Stack)(()=>({
    flexDirection:'row',
    alignItems:'center',
}))