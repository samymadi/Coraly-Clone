import React from 'react'

import TitleDescTemp from '../../../shared/titleDescTemp'

const DO_YOU_FORGOT_PASSWORD='Do you forgot your password?';
const DO_YOU_FORGOT_PASSWORD_DESC ='Insert your email and we will send you a link in your email box to reset your password.'


function TitleDesc() {
  return (
    <TitleDescTemp
        sx={{
          marginBottom:'50px'
        }}
        title={DO_YOU_FORGOT_PASSWORD}
        description={DO_YOU_FORGOT_PASSWORD_DESC}/>
  )
}

export default TitleDesc