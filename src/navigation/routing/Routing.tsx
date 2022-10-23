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
import Login from '../../components/auth/Login/login'
import CreateWorkSpace from '../../components/auth/CreateWorkSpace/createWorkSpace'
import confirmationEmailWorkSpace from '../../components/auth/confirmationEmailWorkSpace/confirmationEmailWorkSpace'
import CompleteProfile from '../../components/auth/completProfile/completeProfile'
import ForgotPassword from '../../components/auth/forgotPassword/forgotPassword'
import EmailSentForgotPassword from '../../components/auth/EmilSentForgotPassword/emailSentForgotPassword'
import ChangePassword from '../../components/auth/changePassword/changePassword'
//routespath
import routesPath from './routePaths'


//test

export interface RoutingProps extends PropsWithChildren{

}

export type RoutingComponent  = React.FC<RoutingProps>




const routes = {
    login:{
      path:routesPath.LOGIN,
      component :Login
                        
    },
    workspace:{
      path:routesPath.CREATE_WORK_SPACE,
      component:CreateWorkSpace
    },
    emailConfirmation:{
      path:routesPath.EMAIL_CONFIRMATION_WORK_SPACE,
      component:confirmationEmailWorkSpace
    },
    completeProfile:{
      path:routesPath.COMPLETE_PROFILE,
      component:CompleteProfile
    },
    forgotPassword:{
      path:routesPath.FORGOT_PASSWORD,
      component:ForgotPassword,
      exact:true,
    },
    emailConfirmationResetPassword:{
      path:routesPath.EMAIL_SENT_PASSWORD,
      component:EmailSentForgotPassword,
    },
    insertNewPassword:{
      path:routesPath.INSERT_NEW_PASSWORD,
      component:ChangePassword,
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