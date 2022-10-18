import React from 'react'


import TitleDescTemp from '../shared/titleDescTemp'



const LOGIN='Log in';
const DESC = 'Thanks to come back on Coraly'

function TitleDesc() {
  return (
    <TitleDescTemp
        title={LOGIN}
        description={DESC}
        />
     
  )
}

export default TitleDesc