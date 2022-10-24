import React,{
    memo
} from 'react'

import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import {ReactComponent as ConfirmationImage} from '../../../../assets/ConfirmationImage.svg';

function ConfirmationEmailWorkSpace() {
  return (
    <LoginLayout
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