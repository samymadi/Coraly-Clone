import React from 'react'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import Form from './form'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'
import TextTemplateCreateAccount from '../textTemplayeCreateAccount/textTemplateCreateAccount'

import routesPath from '../../../../navigation/routing/routePaths'

//assets
import AuthBackground from '../../../../assets/backgrounds/authBackground12.png';


const _Login = 'Login';
const DO_YOU_HAVE_ACCOUNT='Don’t you have an account?';
const SIGN_UP_NOW =' Sign up now'

function Login() {
  return (
    <LoginLayout
      background={AuthBackground}
      formLayoutStyle={{
        flex:0.3
      }}>
        <TitleDesc/>
        <Form/>
        <CustomButtonIconLabel
              sx={{marginBottom:'25px'}}
              color='info'
              size='large'>
              {_Login}
        </CustomButtonIconLabel>
        <TextTemplateCreateAccount
              label={DO_YOU_HAVE_ACCOUNT}
              textRedirection={{
                href:routesPath.CREATE_WORK_SPACE,
                to:'somewhere',
                label:SIGN_UP_NOW
              }}/>


    </LoginLayout>
  )
}

export default Login