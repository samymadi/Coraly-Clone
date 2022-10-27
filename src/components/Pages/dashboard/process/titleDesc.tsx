import React from 'react'


import TitleDescTemp from '../../../shared/titleDescTemp'


const WELCOME='Welcome, Fabrizio Nillo';
const PROCESS_DESC='Work with your team mates, take track of your process and close all tasks'


function TitleDesc() {
  return (
    <TitleDescTemp
        title={WELCOME}
        description={PROCESS_DESC}
        containerStyle={{
            width:'40%',
            marginBottom:'24px'
        }}
        titleStyle={{
            fontSize:'28px',
            lineHeight:'45px',
        }}
        descStyle={{
            fontSize:'15px',
            lineHeight:'30px',
        }}/>
            
  )
}

export default TitleDesc