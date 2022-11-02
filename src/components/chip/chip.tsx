import React from 'react'


import {
    Chip as MuiChip,
    ChipProps,
    styled
} from '@mui/material';


interface IChip {
    extraSize?:"extra-small" | "large" 
    extraColor?:string 
}

function Chip({
    extraSize,
    extraColor,
    size,
    ...rest
}:ChipProps & IChip) {


    
  return (
    <CustomChip
        sx={{...(extraSize &&  {
            
            fontSize: extraSize === 'extra-small' ? "12px" : "" ,
            lineHeight:extraSize === 'extra-small' ? "18px" : "",
            padding:extraSize === 'extra-small' ? "2px 16px !important" : "8px 16px !important",
            height:extraSize === 'extra-small' ? "22px !important" : "40px !important"
            }),
            ...(extraColor && {
                backgroundColor:`${extraColor} !important`,
            })}}
        size={size}
        {...rest}/>
  )
}

export default Chip



const CustomChip = styled(MuiChip)(({theme})=>({

   

    fontSize:'16px',
    fontWeight:'600',
    lineHeight:'24px',
    borderRadius:'100px',

    "& span":{
        padding:'0'
    },

    "&.MuiChip-filled":{
        backgroundColor:theme.paletteColor.primary.default,
        color:'white',
        width:'fit-content',
        
    },
    "&.MuiChip-outlined":{
        backgroundColor:'white',
        color:theme.paletteColor.primary.default,
        border:`1px solid ${theme.paletteColor.primary.default}`,
        width:'fit-content',
        
        
    },
    "&.MuiChip-sizeMedium":{
       
        padding:'6px 16px',
        height:'36px',
    },
    "&.MuiChip-sizeSmall":{
        padding:'2px 16px',
        height:'28px',
    },
    
}))