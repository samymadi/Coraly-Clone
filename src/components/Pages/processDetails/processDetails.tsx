import React from 'react'

import { 
    useParams 
} from 'react-router-dom'

import useBreadCurmbs from '../../../utils/Customhooks/useBreadCrumbs'
import routesPath from '../../../navigation/routing/routePaths'


import ToolBar from '../../toolBar/toolBar'
import ContractsCollapse from './contractsCollapse/contractsCollapse'

import { 
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
      <ContractsCollapse/>
    </Layout>
  )
}

export default ProcessDetails


const Layout = styled(Stack)(({})=>({ 
  "&::-webkit-scrollbar":{
    display:'none',
  }
}))