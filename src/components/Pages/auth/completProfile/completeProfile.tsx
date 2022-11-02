import React from 'react'


import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel'
import Form from './form'


import AuthBackground2 from '../../../../assets/backgrounds/authBackground22.jpg';
import {ReactComponent as Background} from '../../../../assets/backgrounds/authBackground3.svg';



const COMPLETE_NOW ='Complete now';

function CompleteProfile() {
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
            size='large'>
            {COMPLETE_NOW}
        </CustomButtonIconLabel>
        
    </LoginLayout>
  )
}

export default CompleteProfile