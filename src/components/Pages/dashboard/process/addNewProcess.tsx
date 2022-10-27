import React from 'react'

import {
     styled,
     Typography as  MuiTypography,
     useTheme,
     Button
} from '@mui/material'


import {ReactComponent as Plus} from '../../../../assets/icons/Plus.svg';

const CREATE_NEW_PORCESS='Create a new process';


function AddNewProcess() {

    const {
        neutral
    } = useTheme().paletteColor;

  return (
        <Container>
            <Plus
                fill={neutral['70']}
                width='30px'
                height='30px'
                style={{
                    marginBottom:'13.5px'
                }}/>
            <Typography>
                {CREATE_NEW_PORCESS}
            </Typography>
        </Container>
  )
}

export default AddNewProcess



const Container =  styled('div')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'148px',
    height:'148px',
    borderRadius:'8px',
    cursor:'pointer',
    border:`1px dashed ${theme.paletteColor.neutral['20']} `
}))


const Typography = styled(MuiTypography)(({theme})=>({
    
    fontWeight:'600',
    fontSize:'1rem',
    lineHeight:'24px',
    textAlign:'center',
    color:theme.paletteColor.neutral['70']
}))