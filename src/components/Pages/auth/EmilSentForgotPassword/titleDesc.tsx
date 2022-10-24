import React from 'react'


import TitleDescTemp from '../../../shared/titleDescTemp'


const EMAIL_WAS_SENT ='Email was sent!';
const EMAIL_WAS_SENT_DESC ='Check your email inbox.We sent you an email to edit your password. If you didn’t received the email, please check your SPAM inbox'

function TitleDesc() {
  return (
    <TitleDescTemp
        containerStyle={{
            marginBottom:'50px'
        }}
        title={EMAIL_WAS_SENT}
        description={EMAIL_WAS_SENT_DESC}/>
  )
}

export default TitleDesc