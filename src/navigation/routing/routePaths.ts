const Login = {
     LOGIN:'/auth/login',
}


const Dashboard ={
      ROOT:'/dashboard',
      PROCESSES:'/dashboard/processes',
      TEAM:'/dashboard/team',
      MODELS:'/dashboard/models',
      DATABASE:'/dashboard/database',
      MACRO_PHASES:'/dashboard/macro_phases',
      AUTOMATION:'/dashboard/automations',
      SELLERS:'/dashboard/sellers',
      SUPPORT:'/dashboard/support',
      LOGOUT:Login.LOGIN
}


const routesPath = {
    ...Login,
    DASHBOARD:{...Dashboard}
    
}



export default routesPath