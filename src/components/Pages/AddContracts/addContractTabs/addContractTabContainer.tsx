import React from 'react'


import {
     Stack, 
     StackProps,
     styled, 
     TabsProps
} from '@mui/material'

import AddContractTabs from './addContractTabs'
import Divider from '../../../divider/divider'


function AddContractTabContainer({
    children,
    ...rest
}:TabsProps) {
  return (
    <Container
    >
            <Wrapper>
                {children} 
            </Wrapper>
            <Divider 
                orientation='vertical'
                sx={{
                    marginLeft:'',
                }}/>
            <AddContractTabs
                {...rest}/>
    </Container>
  )
}

export default AddContractTabContainer


const Container = styled(Stack)(({theme})=>({
    flexDirection:'row',
    width:'100%',
    flex:'1',
    paddingLeft:'16px',
    

})) 


const Wrapper = styled(Stack)(({theme})=>({
    flex:'1',
    paddingRight:'25px',
}))