import React, { useState } from 'react'


import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  styled,
  ListItemProps,
  ListItemIconProps
} from '@mui/material'


import Link,{
  LinkProps
} from '../Link/link';


import useDrawer from '../../utils/Customhooks/useDrawer';

interface ItemProps{
  icon:JSX.Element
  text:string | number
  linkProps:LinkProps,
  selected:boolean,
}


type  ItempComponentProps = ItemProps &  ListItemProps

const Item:React.FC<ItempComponentProps> = ({
  icon,
  text,
  linkProps,
  selected,
  ...rest

}:ItemProps)=> {


  


  const {
    open,
  } = useDrawer();

  return (
    <Link 
        {...linkProps}>
      <CustomListItem
        {...rest}
        >
        <CustomListItemButton
          selected={selected}>
          <CustomListItemIcon
            >
              {icon}
          </CustomListItemIcon>
          {open &&
            <CustomListItemText
                 primary={text}/>}
        </CustomListItemButton>
      </CustomListItem>
    </Link>
  )
}

export default Item

// interface Extra{
//   open?:boolean 
// }

// type CustomListItemIconProps =   ListItemIconProps & Extra;


const CustomListItem = styled(ListItem)(({theme})=>({
  minHeight:'48px',
  padding:'0',
  minWidth:'fit-content'
  
}))


const CustomListItemIcon = styled(ListItemIcon)(({theme})=>({

  minWidth:"fit-content",
   marginRight:  "12px",
  "& svg":{
    fill:theme.paletteColor.neutral['10'],
  },


}))


const CustomListItemText = styled(ListItemText)(({theme})=>({

  "&.MuiListItemText-root":{
    
    "& span":{
      fontSize:'14px',
      fontWeight:'600',
      color:theme.paletteColor.neutral['10'],
    }
  }
}))

const CustomListItemButton = styled(ListItemButton)(({theme})=>({
      padding:'0 14px',
      height:'48px',
      borderRadius:'8px',
      "&.Mui-selected":{
          width:'fit-content',
          backgroundColor:"rgba(255, 255, 255, 0.05)",
          "& svg":{
            fill:theme.paletteColor.primary.default
          },
          "& span":{
            color:theme.paletteColor.primary.default+" !important"
          }
      }
      
}))