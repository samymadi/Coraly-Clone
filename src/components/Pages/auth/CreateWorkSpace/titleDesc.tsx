import React from 'react'


import TitleDescTemp from '../../../shared/titleDescTemp'



const CREATE_YOUR_WORKSPACE='Create your workspace';
const WORK_SPACE_DESC ='Coraly is the tool to manage your work processes form the same place'


function TitleDesc() {
  return (
    <TitleDescTemp
        title={CREATE_YOUR_WORKSPACE}
        description={WORK_SPACE_DESC}/>
        
  )
}

export default TitleDesc