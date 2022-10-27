import React from 'react'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import Form from './form'
import TextTemplateCreateAccount from '../textTemplayeCreateAccount/textTemplateCreateAccount'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'

import routesPath from '../../../../navigation/routing/routePaths'

//assets
import AuthBackground3 from '../../../../assets/backgrounds/authBackground31.jpg';



const GO_BACK_TO_LOGIN ='Go back to';
const LOGIN='Login'
const RESET_PASSWORD ='Reset Password';

function ForgotPassword() {
  return (
    <LoginLayout
        background={AuthBackground3}
        formLayoutStyle={{
            flex:0.3
        }}>
        <TitleDesc/>  
        <Form/>
        <CustomButtonIconLabel
            sx={{
                marginBottom:'32px'
            }}
            size='large'>
                {RESET_PASSWORD}
        </CustomButtonIconLabel>
        <TextTemplateCreateAccount
            label={GO_BACK_TO_LOGIN}
            textRedirection={{
                label:LOGIN,
                href:routesPath.LOGIN,
                to:'somewhere'
            }}/>

    </LoginLayout>
  )
}

export default ForgotPassword