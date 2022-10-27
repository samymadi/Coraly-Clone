import React from 'react'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'
import Form from './form'


import AuthBackground2 from '../../../../assets/backgrounds/authBackground22.jpg';


const COMPLETE_NOW ='Complete now';

function CompleteProfile() {
  return (
    <LoginLayout
        background={AuthBackground2}
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
            size='large'>
            {COMPLETE_NOW}
        </CustomButtonIconLabel>
        
    </LoginLayout>
  )
}

export default CompleteProfile