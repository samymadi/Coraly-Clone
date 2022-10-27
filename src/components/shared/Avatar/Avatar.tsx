import React from 'react'



import {
    Avatar as MuiAvatar,
    AvatarProps,
    styled,
} from '@mui/material';


const Avatar:React.FC<AvatarProps> = ({
    children,
    ...rest
})=> {
  return (
    <CustomAvatar
        {...rest}>
      {children}
    </CustomAvatar>
  )
}

export default Avatar



const CustomAvatar = styled(MuiAvatar)(({theme})=>({
    width:'40px',
    height:'40px',
    borderRadius:'8px',
    backgroundColor:theme.paletteColor.primary.disabled,
    border:`1px solid ${theme.paletteColor.primary.default}`,

    "&.MuiTypography-root":{
        fontSize:'14px',
        fontWeight:'bold',
    }
}))



