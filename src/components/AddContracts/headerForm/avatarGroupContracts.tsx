import React from 'react'



//components
import AvatarGroup from '../../AvatarGroup/avatarGroup'
import AvatarNameAbstractionStyle2 from '../../AvatarNameAbstraction/AvatarNameAbstractionStyle2'
import GroupWithAddActions from './groupWithAddActions'


const names =[
        'Pelo laza',
        'Cello Mechala',
        'Fenatic Reds',
        'Lyes Maamra',
        "Sience Techno",
        'Cello Mechala',
        'Fenatic Reds',
        'Lyes Maamra',
        "Sience Techno",
        "Sience Techno",
    ]

function AvatarGroupContracts() {


  return (
    <GroupWithAddActions>
        <AvatarGroup
            max={6}>
            {names && names.map((data:string)=>(
                <AvatarNameAbstractionStyle2
                      typograhyStyle={{
                          fontSize:'10px',
                          lineHeight:'0',
                      }}
                      key={data}
                      label={data}/>
                ))}
        </AvatarGroup>
        
        
    </GroupWithAddActions>
  )
}

export default AvatarGroupContracts