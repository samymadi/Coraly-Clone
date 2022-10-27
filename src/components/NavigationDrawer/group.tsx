import React,{
    memo
} from 'react'

import {
     styled,
} from '@mui/material'

//compenents
import Typography from '../shared/typography/typography'


import AvatarNameAbstraction from '../AvatarNameAbstraction/AvatarNameAbstraction';

import useDrawer from '../../utils/Customhooks/useDrawer';

const LASTING_DYNAMICS= 'Lasting Dynamics';


function Group() {

    const {
        open,
    }   =  useDrawer()

  return (
    <Container>

        <AvatarNameAbstraction
            label={LASTING_DYNAMICS}/>
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

