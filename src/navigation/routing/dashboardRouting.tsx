import React,{
    memo,
    PropsWithChildren,
} from 'react'

// react router
import {
    Route,
    Switch,
} from 'react-router-dom'

//routes paths
import routesPath from './routePaths'
import Process from '../../components/Pages/dashboard/process/process'
import ProcessDetails from '../../components/Pages/processDetails/processDetails'
import AddContractsModal from '../../components/Pages/AddContracts/Modal/AddContractsModal'

export interface DashbaordRoutingProps extends PropsWithChildren{

}

export type DashboardRoutingComponent  = React.FC<DashbaordRoutingProps>






const routes = {
    process:{
      path:routesPath.DASHBOARD.PROCESSES,
      component:Process,
      exact:true,
    },
    processDetails:{
      path:`${routesPath.DASHBOARD.PROCESSES}/:id_process`,
      component:ProcessDetails
    },
    team:{
      path:routesPath.DASHBOARD.TEAM,
      component:()=><div>dashboard/team</div>
    },
    models:{
      path:routesPath.DASHBOARD.MODELS,
      component:()=><div>dashboard/models</div>
    },
    database:{
      path:routesPath.DASHBOARD.DATABASE,
      component:()=><div>dashboard/database</div>
    },
    macro_phases:{
      path:routesPath.DASHBOARD.MACRO_PHASES,
      component:()=><div>dashboard/macro</div>
    },
    automations:{
      path:routesPath.DASHBOARD.AUTOMATION,
      component:()=><div>dashboard/auto</div>
    },
    sellers:{
      path:routesPath.DASHBOARD.SELLERS,
      component:()=><div>dashboard/sellers</div>
    },
    support:{
      path:routesPath.DASHBOARD.SUPPORT,
      component:()=><div>dashboard/support</div>
    },
    logout:{
        path:routesPath.DASHBOARD.LOGOUT,
        component:()=><div>dashboard/logout</div>
      },
       
}



const DashboardRouting:DashboardRoutingComponent = ()=>{
  return (
        <Switch>
          {Object.values(routes).map((props,index)=>(
            <Route
                {...props}
                key={index}
            />
          ))}
        </Switch> 
  )
}

export default memo(DashboardRouting)