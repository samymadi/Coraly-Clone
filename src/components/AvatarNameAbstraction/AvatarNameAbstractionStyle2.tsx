import { styled } from '@mui/material'
import React from 'react'


import AvatarNameAbstraction,{
    AvatarNameAbstractionProps
} from './AvatarNameAbstraction'

function AvatarNameAbstractionStyle2(props:AvatarNameAbstractionProps) {
  return (
    <CustomAvatarNameAbstraction
        typograhyStyle={{
            fontSize:'8px',
        }}
        {...props}
        />
        
  )
}

export default AvatarNameAbstractionStyle2



const CustomAvatarNameAbstraction  = styled(AvatarNameAbstraction)(({theme})=>({
    backgroundColor:theme.paletteColor.actionSecondary.default,
    borderRadius:'50%',
    height:'24px',
    width:'24px',
    border:'none',
}))