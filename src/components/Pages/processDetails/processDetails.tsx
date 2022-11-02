import React from 'react'

import { 
    useParams 
} from 'react-router-dom'

import useBreadCurmbs from '../../../utils/Customhooks/useBreadCrumbs'
import routesPath from '../../../navigation/routing/routePaths'


import ToolBar from '../../toolBar/toolBar'
import ContractsCollapse from './contractsCollapse/contractsCollapse'
import AddContractsModal from '../AddContracts/Modal/AddContractsModal'

//utils
import { 
  getSeachParams 
} from '../../../utils/helpersFunctions'

import { 
  styled,
  Stack, 
} from '@mui/material'


//actions
const CREATE_CONTRACTS ='create_contracts';





function ProcessDetails(props:any) {


    const {
      search
    } = props.location

    const mountAddContracts = getSeachParams(search).value.toLowerCase() === CREATE_CONTRACTS;
  
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
      {mountAddContracts && <AddContractsModal/> }
    </Layout>
  )
}

export default ProcessDetails


const Layout = styled(Stack)(({})=>({ 
  "&::-webkit-scrollbar":{
    display:'none',
  }
}))