import React from 'react'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import Form from './form'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'
import TextTemplateCreateAccount from '../textTemplayeCreateAccount/textTemplateCreateAccount'

const CREATE_NEW_ACCOUNT ='Create now the account';
const DO_YOU_HAVE_ACCOUNT='Do you have an account?'
const SIGN_IN='Sign in'

function CreateWorkSpace() {
  return (
    <LoginLayout
        formLayoutStyle={{
            flex:0.35
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
          href:'somewhere',
          to:'somewhere'
        }}/>


    </LoginLayout>
  )
}

export default CreateWorkSpace