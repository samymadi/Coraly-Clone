import React from 'react'
import TitleDescTemp from '../../shared/titleDescTemp'



const INSERT_NEW_PASSWORD='Insert new password';
const INSERT_NEW_PASSWORD_DESC='Enter your new password to access the platform'

function TitleDesc() {
  return (
    <TitleDescTemp
        containerStyle={{
            marginBottom:'50px'
        }}
        title={INSERT_NEW_PASSWORD}
        description={INSERT_NEW_PASSWORD_DESC}/>
        
  )
}

export default TitleDesc