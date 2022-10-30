import React, { useState } from 'react'

import { 
    useParams 
} from 'react-router-dom'

import useBreadCurmbs from '../../../../utils/Customhooks/useBreadCrumbs'
import routesPath from '../../../../navigation/routing/routePaths'


import ChipCheckbox from '../../../ChipCheckbox/chipCheckbox'
import ToolBar from '../../../toolBar/toolBar'

import { 
  useTheme,
  styled,
  Stack, 
} from '@mui/material'

//assets



function ProcessDetails() {

    const {
        id_process
    } = useParams<{id_process:string}>();

    useBreadCurmbs({
        label:'Process'+id_process,    
        href:`${routesPath.DASHBOARD.PROCESSES}/${id_process}`,
        to:''
    })


  return (
    <Layout>
      <ToolBar/>
    </Layout>
  )
}

export default ProcessDetails


const Layout = styled(Stack)(({})=>({
  // position:"absolute",
  // left:'0',
  // right:'0',  
  "&::-webkit-scrollbar":{
    display:'none',
  }
}))