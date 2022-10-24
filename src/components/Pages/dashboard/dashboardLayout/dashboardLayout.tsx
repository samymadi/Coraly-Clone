import React,{
  memo
} from 'react'

import {
   Stack, 
   styled 
  } from '@mui/material'

import Drawer from '../../../NavigationDrawer/drawer'
import DashboardRouting from '../../../../navigation/routing/dashboardRouting'

function DashboardLayout() {
  return (
    <Container>
      <Drawer/>
      <MainContent>
        <DashboardRouting/>
      </MainContent>
    </Container>
  )
}

export default memo(DashboardLayout)



const Container = styled(Stack)(({theme})=>({
      flexDirection:'row',
}))

const MainContent  = styled(Stack)(({theme})=>({
    flexGrow:1
}))


