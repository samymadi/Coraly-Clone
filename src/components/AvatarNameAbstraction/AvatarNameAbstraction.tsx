import React from 'react'


import Avatar from '../shared/Avatar/Avatar'

import {
    styled,
    Typography,
    AvatarProps,
    SxProps,
    Theme,

} from '@mui/material'

import { 
    stringAvatar
} from '../../utils/helpersFunctions'

//types
import { Text } from '../../_types/basicType'


interface IAvatarNameAbstractionProps {
    label:Text
    typograhyStyle?:SxProps<Theme>
}



export type AvatarNameAbstractionProps = IAvatarNameAbstractionProps  & AvatarProps

const  AvatarNameAbstraction:React.FC<AvatarNameAbstractionProps> = ({
    label,
    typograhyStyle,
    ...rest
})=> {
  return (
    <Avatar
        {...rest}>
            <AvatarTypo
                sx={typograhyStyle}>
                    {stringAvatar(label)}
            </AvatarTypo>
            
    </Avatar>
  )
}

export default AvatarNameAbstraction




const AvatarTypo = styled(Typography)(({})=>({
    color:'white',  
    fontSize:'16px',
    fontWeight:'600',
    lineHeight:'18px',
    marginLeft:'16px',
    margin:'0',
}))