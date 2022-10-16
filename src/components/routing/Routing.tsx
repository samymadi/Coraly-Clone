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
import LoginLayout from '../layout/loginLayout'


//routespath
import routesPath from './routePaths'


export interface RoutingProps extends PropsWithChildren{

}

export type RoutingComponent  = React.FC<RoutingProps>





const routes = {
    login:{
      path:routesPath.LOGIN,
      component :LoginLayout
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
          {Object.values(routes).map((props,index)=>(
            <Route
                {...props}
                key={index}
            />
          ))}
        </Switch> 
    </Router>
  )
}

export default memo(Routing)