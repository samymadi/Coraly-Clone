import React,{
    memo,
    PropsWithChildren,
} from 'react'

// react router
import {
    Route,
    BrowserRouter as Router,
    Switch,

} from 'react-router-dom'



//routes
import DashboardRouting from './dashboardRouting'


//routespath
import routesPath from './routePaths'


export interface RoutingProps extends PropsWithChildren{

}

export type RoutingComponent  = React.FC<RoutingProps>





const routes = {
    login:{
      path:routesPath.LOGIN,
      component:()=><div>login</div>
    },
    dashboard:{
      path:routesPath.DASHBOARD.ROOT,
      component: DashboardRouting
    }      
}



const Routing:RoutingComponent = ()=>{
  return (
    <Router>
        <Switch>
          {Object.values(routes).map(props=>(
            <Route
                {...props}
            />
          ))}
        </Switch> 
    </Router>
  )
}

export default memo(Routing)