import React from 'react'


import { 
    useHistory 
} from 'react-router-dom'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import Form from './form'
import TextTemplateCreateAccount from '../textTemplayeCreateAccount/textTemplateCreateAccount'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'

import routesPath from '../../../../navigation/routing/routePaths'

//assets
import AuthBackground3 from '../../../../assets/backgrounds/authBackground31.jpg';
import {ReactComponent as Background} from '../../../../assets/backgrounds/authBackground1.svg';




const GO_BACK_TO_LOGIN ='Go back to';
const LOGIN='Login'
const RESET_PASSWORD ='Reset Password';

function ForgotPassword() {


    const {push} = useHistory();


    const onSubmit = ()=>{
      push(routesPath.EMAIL_SENT_PASSWORD);
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
            onClick={onSubmit}
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