import React,{
    memo
} from 'react'

import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'

import AuthBackground2 from '../../../../assets/backgrounds/authBackground22.jpg';
import {ReactComponent as ConfirmationImage} from '../../../../assets/ConfirmationImage.svg';

function ConfirmationEmailWorkSpace() {
  return (
    <LoginLayout
        background={AuthBackground2}
        formLayoutStyle={{
          flex:0.35
        }}
        backgroundWrapperStyle={{
          flex:0.65
        }}>
          <TitleDesc
          />
          <ConfirmationImage/>
    </LoginLayout>
  )
}

export default memo(ConfirmationEmailWorkSpace)