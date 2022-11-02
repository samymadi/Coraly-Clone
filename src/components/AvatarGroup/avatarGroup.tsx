import React from 'react'



import {
    AvatarGroup as MuiAvatarGroup,
    AvatarGroupProps,
    styled,

} from '@mui/material';



function AvatarGroup(props:AvatarGroupProps) {
  return (
    <CustomAvatarGroup
        {...props}/>
  )
}

export default AvatarGroup


const CustomAvatarGroup  = styled(MuiAvatarGroup)(({theme})=>({
    flexDirection:'row-reverse',
    alignItems:'center',
    gap:'4px',
    '& .MuiAvatar-root':{
        marginLeft:'0',
    },
    '& .css-11r04fq-MuiAvatar-root-MuiAvatarGroup-avatar':{
        backgroundColor:'transparent',
        fontSize:'12px',
        fontWeight:'500',
        width:'fit-content',
        height:'fit-content',
        color:theme.paletteColor.actionSecondary.default,
    }
    
}))