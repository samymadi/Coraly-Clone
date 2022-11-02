import React from 'react'
import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import {ReactComponent as ConfirmationImage} from '../../../../assets/ConfirmationImage.svg';

//assets
import AuthBackground3 from '../../../../assets/backgrounds/authBackground31.jpg';
import {ReactComponent as Background} from '../../../../assets/backgrounds/authBackground1.svg';




function EmailSentForgotPassword() {
  return (
    <LoginLayout
        background={Background}
        formLayoutStyle={{
            flex:1
        }}>
        <TitleDesc/>
        <ConfirmationImage/>

        
    </LoginLayout>
  )
}

export default EmailSentForgotPassword