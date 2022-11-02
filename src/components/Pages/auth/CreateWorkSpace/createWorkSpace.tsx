import React from 'react'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import Form from './form'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'
import TextTemplateCreateAccount from '../textTemplayeCreateAccount/textTemplateCreateAccount'


import routesPath from '../../../../navigation/routing/routePaths'

//assets
import AuthBackground2 from '../../../../assets/backgrounds/authBackground22.jpg';
import {ReactComponent as Background} from '../../../../assets/backgrounds/authBackground2.svg';



const CREATE_NEW_ACCOUNT ='Create now the account';
const DO_YOU_HAVE_ACCOUNT='Do you have an account?'
const SIGN_IN='Sign in'

function CreateWorkSpace() {
  return (
    <LoginLayout
        background={Background}
        formLayoutStyle={{
            flex:1
        }}
        backgroundWrapperStyle={{
            flex:0.65
        }}>
    <TitleDesc/>
    <Form/>
    <CustomButtonIconLabel
        color='secondary'
        size='large'
        sx={{marginBottom:'25px'}}>
        {CREATE_NEW_ACCOUNT}
    </CustomButtonIconLabel>
    <TextTemplateCreateAccount
        label={DO_YOU_HAVE_ACCOUNT}
        textRedirection={{
          label:SIGN_IN,
          href:routesPath.LOGIN,
          to:'somewhere'
        }}/>


    </LoginLayout>
  )
}

export default CreateWorkSpace