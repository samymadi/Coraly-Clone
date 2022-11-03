import React from 'react'



import { 
  styled,
  Tabs,
  TabsProps
} from '@mui/material'

import {ReactComponent as Icon} from '../../../../assets/icons/shopping_bag.svg';
import {ReactComponent as LineSpacing} from '../../../../assets/icons/line_spacing.svg';
import {ReactComponent as Vector11} from '../../../../assets/icons/Vector11.svg';
import {ReactComponent as Attach} from '../../../../assets/icons/Attach.svg';
import {ReactComponent as Link} from '../../../../assets/icons/Link.svg';
import {ReactComponent as List} from '../../../../assets/icons/list.svg';
// import {ReactComponent as Icon} from '../../../../assets/icons/shopping_bag.svg';


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
          <AddContractTab label={<LineSpacing/>}/>
          <AddContractTab label={<Vector11/>}/>
          <AddContractTab label={<Attach/>}/>
          <AddContractTab label={<Link/>}/>
          <AddContractTab label={<List/>}/>
            
    </CustomTabs>
  )
} 

export default AddContractTabs



const CustomTabs= styled(Tabs)(({theme})=>({
    flex:'0.053',
    
    "& .MuiTabs-flexContainer":{
      gap:'10px',
    },

  "& .MuiTabs-indicator":{
    backgroundColor:theme.paletteColor.primary.default,
    right:'unset',
    height:'24px',
    width:'3px',
    borderRadius:'8px',
  }
}))