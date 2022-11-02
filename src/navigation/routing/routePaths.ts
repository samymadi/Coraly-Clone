const Login = {
     LOGIN:'/auth/login',
     CREATE_WORK_SPACE:"/auth/create-work-space",
     EMAIL_CONFIRMATION_WORK_SPACE:"/auth/confirm-email",
     COMPLETE_PROFILE:'/auth/complete-profile',
     FORGOT_PASSWORD:'/auth/forgot-password',
     EMAIL_SENT_PASSWORD:'/auth/forgot-password/email-sent',
     INSERT_NEW_PASSWORD:'/auth/forgot-password/reset-password'
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
      CREATE_CONTRACT:`/dashboard/processes/1?action=create_contracts`,
      LOGOUT:Login.LOGIN
}


const routesPath = {
    ...Login,
    DASHBOARD:{...Dashboard}
    
}



export default routesPath