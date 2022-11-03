import React,{
    memo,
    PropsWithChildren,
    useEffect,
} from 'react'

// react router
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect

} from 'react-router-dom'



//routes

import Login from '../../components/Pages/auth/Login/login'
import CreateWorkSpace from '../../components/Pages/auth/CreateWorkSpace/createWorkSpace'
import confirmationEmailWorkSpace from '../../components/Pages/auth/confirmationEmailWorkSpace/confirmationEmailWorkSpace'
import CompleteProfile from '../../components/Pages/auth/completProfile/completeProfile'
import ForgotPassword from '../../components/Pages/auth/forgotPassword/forgotPassword'
import EmailSentForgotPassword from '../../components/Pages/auth/EmilSentForgotPassword/emailSentForgotPassword'
import ChangePassword from '../../components/Pages/auth/changePassword/changePassword'
//404 not found
import PageNotFound from '../../components/Pages/404PageNotFound/PageNotFound'

//dashboard
import dashboardLayout from '../../components/Pages/dashboard/dashboardLayout/dashboardLayout'

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
      component: dashboardLayout
    },
    pageNotFound:{
      path:routesPath.PAGE_NOT_FOUND,
      component:PageNotFound
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

      <Route path='/' exact>
        <Redirect to='/dashboard/processes'/>
      </Route>
      <Route path='/dashboard' exact>
        <Redirect to='/dashboard/processes'/>  
      </Route>  
    </Router>
  )
}

export default memo(Routing)