import React, { 
  useState 
} from 'react'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import Form from './form'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'
import TextTemplateCreateAccount from '../textTemplayeCreateAccount/textTemplateCreateAccount'
import Snackbar from '../../../shared/snackbar/snackbar'
import routesPath from '../../../../navigation/routing/routePaths'

//assets
import AuthBackground from '../../../../assets/backgrounds/authBackground12.png';
import {ReactComponent as Background} from '../../../../assets/backgrounds/authBackground3.svg';

import { 
  useHistory 
} from 'react-router-dom'



const _Login = 'Login';
const DO_YOU_HAVE_ACCOUNT='Don’t you have an account?';
const SIGN_UP_NOW =' Sign up now'
const SUCCESSFUL_LOGIN='User successfully authenticated'





function Login() {

  const [loginMessage,setLoginMessage] =useState<string>('');
  const {
    replace
  } = useHistory();

  const onClickLogin= ()=>{
      setLoginMessage(SUCCESSFUL_LOGIN);
      replace(routesPath.DASHBOARD.ROOT);
  }
  return (
    <LoginLayout
      background={Background}
      formLayoutStyle={{
        flex:1
      }}>
        
        <TitleDesc/>
        <Form/>
        <CustomButtonIconLabel
              onClick={onClickLogin}
              color='info'
              size='large'
              sx={{
                marginBottom:'25px'
              }}
              >
              {_Login}
        </CustomButtonIconLabel>
        <TextTemplateCreateAccount
              label={DO_YOU_HAVE_ACCOUNT}
              textRedirection={{
                href:routesPath.CREATE_WORK_SPACE,
                to:'somewhere',
                label:SIGN_UP_NOW
              }}/>
        <Snackbar 
          security='success'
          setMessage={setLoginMessage}    
          message={loginMessage}/>              


    </LoginLayout>
  )
}

export default Login