import React from 'react'


import LoginLayout from '../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import Form from './form'

function Login() {
  return (
    <LoginLayout>
        <TitleDesc/>
        <Form/>
    </LoginLayout>
  )
}

export default Login