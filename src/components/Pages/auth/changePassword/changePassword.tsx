import React from 'react'
import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'
import Form from './form'


//assets
import AuthBackground3 from '../../../../assets/backgrounds/authBackground31.jpg';


const CONFIRM_NEW_PASSWORD ='Confirm new password'

function ChangePassword() {
  return (
    <LoginLayout  
        background={AuthBackground3}
        formLayoutStyle={{
            flex:0.3
        }}>
            <TitleDesc/>
            <Form/>
            <CustomButtonIconLabel
                size='large'>
                {CONFIRM_NEW_PASSWORD}
            </CustomButtonIconLabel>

        
    </LoginLayout>
  )
}

export default ChangePassword