import React from 'react'


import TitleDescTemp from '../../shared/titleDescTemp'

const YOUR_WORK_SPACE_IS_READY ='Your workspace is ready';
const CHECK_EMAIL_WORK_SPACE='Check your email inbox.We sent you a confirmation email.' 

function TitleDesc() {
  return (
    <TitleDescTemp
            containerStyle={{
                marginBottom:'56px'
            }}    
            title={YOUR_WORK_SPACE_IS_READY}
            description={CHECK_EMAIL_WORK_SPACE}
            />
  )
}

export default TitleDesc