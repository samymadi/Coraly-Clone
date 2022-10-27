import React from 'react'
import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import {ReactComponent as ConfirmationImage} from '../../../../assets/ConfirmationImage.svg';

//assets
import AuthBackground3 from '../../../../assets/backgrounds/authBackground31.jpg';



function EmailSentForgotPassword() {
  return (
    <LoginLayout
        background={AuthBackground3}
        formLayoutStyle={{
            flex:0.3
        }}>
        <TitleDesc/>
        <ConfirmationImage/>

        
    </LoginLayout>
  )
}

export default EmailSentForgotPassword