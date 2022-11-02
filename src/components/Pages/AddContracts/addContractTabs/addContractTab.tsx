import React from 'react'



import {
  Tab, 
  styled, 
  TabProps
} from '@mui/material'




function AddContractTab(props:TabProps) {
  return (
    <CustomTab
      {...props}/>
  )
}

export default AddContractTab



const CustomTab = styled(Tab)(({theme})=>({
  
  width:'fit-content',
  minWidth:'fit-content',
  minHeight:'fit-content',
  padding:'8px 12px',
    "& svg":{ 
        fill:theme.paletteColor.neutral['60']
    },
    "&.Mui-selected":{
      "& svg":{
        fill:theme.paletteColor.primary.default
      }
    }
})) 