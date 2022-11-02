import React from 'react'



import { 
  styled,
  Tabs,
  TabsProps
} from '@mui/material'

import {ReactComponent as Icon} from '../../../../assets/icons/shopping_bag.svg';


import AddContractTab from './addContractTab'

function AddContractTabs({
  children,
  ...rest
}:TabsProps) {
  return (
    <CustomTabs
        orientation='vertical'
        {...rest}
        >
          
          <AddContractTab label={<Icon/>}/>
          <AddContractTab label={<Icon/>}/>
            
    </CustomTabs>
  )
} 

export default AddContractTabs



const CustomTabs= styled(Tabs)(({theme})=>({
    flex:'0.08',


  "& .MuiTabs-indicator":{
    backgroundColor:theme.paletteColor.primary.default,
    right:'unset',
    height:'24px',
    width:'3px',
    borderRadius:'8px',
  }
}))