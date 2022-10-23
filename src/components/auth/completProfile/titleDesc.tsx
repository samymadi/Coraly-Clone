import React from 'react'


import TitleDescTemp from '../../shared/titleDescTemp'


const COMPLETE_YOUR_PROFILE='Complete your profile';
const INSERT__INFO='Insert all your info to proceed with your workspace';

function TitleDesc() {
  return (
    <TitleDescTemp
            containerStyle={{
                marginBottom:'45px'
            }}
            title={COMPLETE_YOUR_PROFILE}
            description={INSERT__INFO}/>
  )
}

export default TitleDesc