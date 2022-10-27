import React,{
  memo
} from 'react'

import {
   Stack, 
   styled 
  } from '@mui/material'

import BreadCrumbsManager from '../../../breadCrumbsManager/breadCrumbsManager'

import Drawer from '../../../NavigationDrawer/drawer'
import DashboardRouting from '../../../../navigation/routing/dashboardRouting'
import AppBar from '../../../AppBar/AppBar'

function DashboardLayout() {


  return (
    <BreadCrumbsManager>
      <Container>
        <Drawer/>
        <MainContent>
          <AppBar/> 
          <ContentContainer>
            <DashboardRouting/>
          </ContentContainer> 
        </MainContent>
      </Container>
    </BreadCrumbsManager>
  )
}

export default memo(DashboardLayout)



const Container = styled(Stack)(({theme})=>({
      flexDirection:'row',
}))

const MainContent  = styled('div')(({theme})=>({
  flexGrow:1
}))


const ContentContainer = styled('div')(({theme})=>({
  position:'relative',
  height:'calc(100vh - 64px)',
  overflowY:'scroll',
})) 


