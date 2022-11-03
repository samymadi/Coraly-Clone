import React from 'react'


import{
    styled,
}from '@mui/material';  

import IconLabel,{
    IconLabelPorps
} from '../../../shared/iconLabel/iconLabel'

import {ReactComponent as Database} from '../../../../assets/icons/data_storage.svg';

function CustomChip(props:IconLabelPorps) {
  return (
    <CustomIconLabel
        rightIcon={<Database/>}
        {...props}
    />
        
  )
}

export default CustomChip


const CustomIconLabel = styled(IconLabel)(({theme})=>({
    backgroundColor:theme.paletteColor.neutral['20'],
    borderRadius:'100px',
    padding:'0 16px',

    "& .MuiTypography-root":{
        fontSize:'14px',
    },

    "& svg":{
        fill:theme.paletteColor.neutral['100'],
        height:'15px',
        width:'15px',
    }
}))