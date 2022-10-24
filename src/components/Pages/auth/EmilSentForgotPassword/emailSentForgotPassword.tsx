import React from 'react'
import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import {ReactComponent as ConfirmationImage} from '../../../../assets/ConfirmationImage.svg';



function EmailSentForgotPassword() {
  return (
    <LoginLayout
        formLayoutStyle={{
            flex:0.3
        }}>
        <TitleDesc/>
        <ConfirmationImage/>

        
    </LoginLayout>
  )
}

export default EmailSentForgotPassword