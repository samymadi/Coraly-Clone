import React,{
  memo
} from 'react'

import {
   styled,
   AppBar as MuiAppBar,

  } from '@mui/material'


import BreadCrumbsTopBar from './breadCrumbsTopBar'
import Actions from './actions'

function AppBar() {
  return (
    <CustomAppBar>
        <BreadCrumbsTopBar/>
        <Actions/>

    </CustomAppBar>
  )
}

export default memo(AppBar)



const CustomAppBar  = styled(MuiAppBar)(({theme})=>({
  flexDirection:"row",
  justifyContent:'space-between',
  alingItems:'center',
  position:'relative',
  height:'64px',
  padding:'14px 24px ',
  boxShadow:`0px 2px 2px ${theme.paletteColor.neutral['20']}`,
  backgroundColor:theme.paletteColor.neutral.white,
}))