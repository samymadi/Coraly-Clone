import React,{
    memo
} from 'react'

import {
     styled,
     Avatar
} from '@mui/material'

//compenents
import Typography from '../shared/typography/typography'



import { 
    stringAvatar 
} from '../../utils/helpersFunctions';

import useDrawer from '../../utils/Customhooks/useDrawer';

const LASTING_DYNAMICS= 'Lasting Dynamics';


function Group() {

    const {
        open,
    }   =  useDrawer()

  return (
    <Container>
        <CustomAvatar
                variant='square'>
                    <AvatarTypo>
                            {stringAvatar(LASTING_DYNAMICS)}        
                    </AvatarTypo>
        </CustomAvatar>
            
        {open && 
        <Typography
                sx={{
                    color:'white',  
                    fontSize:'14px',
                    fontWeight:'600',
                    lineHeight:'18px',
                    marginLeft:'16px'
                }}>
                {LASTING_DYNAMICS}
        </Typography>}
    </Container>
    

  )
}

export default memo(Group)



const Container = styled('div')(({})=>({
    display:'flex',
    alignItems:'center',
}))


const CustomAvatar = styled(Avatar)(({theme})=>({
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



const AvatarTypo = styled(Typography)(({})=>({
    color:'white',  
    fontSize:'16px',
    fontWeight:'600',
    lineHeight:'18px',
    marginLeft:'16px',
    margin:'0',
}))