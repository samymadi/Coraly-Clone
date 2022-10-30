import React from 'react'

import { 
    useParams 
} from 'react-router-dom'

import useBreadCurmbs from '../../../../utils/Customhooks/useBreadCrumbs'
import routesPath from '../../../../navigation/routing/routePaths'

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
    <div>ProcessDetails</div>
  )
}

export default ProcessDetails