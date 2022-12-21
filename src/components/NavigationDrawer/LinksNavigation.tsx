import React,{
  useState
} from 'react'


import {
  List, 
  styled
} from '@mui/material';



import Item from './Item';

import routesPath from '../../navigation/routing/routePaths';

import {ReactComponent as DataStorage} from '../../assets/icons/data_storage.svg';
import {ReactComponent as Document} from '../../assets/icons/document.svg';
import {ReactComponent as Help} from '../../assets/icons/Help.svg';
import {ReactComponent as Logout} from '../../assets/icons/Logout.svg';
import {ReactComponent as Robot} from '../../assets/icons/robot.svg';
import {ReactComponent as Sitemap} from '../../assets/icons/sitemap.svg';
import {ReactComponent as Standard} from '../../assets/icons/Standard.svg';
import {ReactComponent as Users} from '../../assets/icons/users.svg';
import {ReactComponent as Vector} from '../../assets/icons/Vector.svg';




const LinksItems = [
  {
    icon:<Vector/>,
    text:'Process',
    linkProps:{
        href:routesPath.DASHBOARD.PROCESSES,
        to:''
    },
  },
  {
    icon:<Users/>,
    text:'Team',
    linkProps:{
        href:routesPath.DASHBOARD.TEAM,
        to:''
    },
  },
  {
    icon:<Document/>,
    text:'Model',
    linkProps:{
        href:routesPath.DASHBOARD.MODELS,
        to:''
    },
  },
  {
    icon:<DataStorage/>,
    text:'Database',
    linkProps:{
        href:routesPath.DASHBOARD.DATABASE,
        to:''
    },
  },
  {
    icon:<Standard/>,
    text:'Macro Phases',
    linkProps:{
        href:routesPath.DASHBOARD.MACRO_PHASES,
        to:''
    },
  },
  {
    icon:<Robot/>,
    text:'Automations',
    linkProps:{
      href:routesPath.DASHBOARD.AUTOMATION,
      to:''
    },
  },
  {
    icon:<Sitemap/>,
    text:'Sellers',
    linkProps:{
      href:routesPath.DASHBOARD.SELLERS,
      to:''
    },
  },
  {
    icon:<Help/>,
    text:'Support',
    linkProps:{
      href:routesPath.DASHBOARD.SUPPORT,
      to:''
    },
  },
  {
    icon:<Logout/>,
    text:'Logout',
    linkProps:{
      href:routesPath.DASHBOARD.LOGOUT,
      to:''
    },
  },
  
  
  
]

function LinksNavigation() {

  const [selectedIndex,setSelectedIndex] = useState<number>(NaN);


  const handleSelect = (index:number)=>{
    setSelectedIndex(index);
  }
  
  return (
    <CustomList>
          {LinksItems.map((props:any,index:number)=>(
            <Item
              key={index}
              onClick={event=>handleSelect(index)}
              selected={selectedIndex === index}
              {...props}
             />
          ))}
    </CustomList>
  )
}

export default LinksNavigation



const CustomList = styled(List)(({theme})=>({
    "& -webkit-scrollbar":{
      display:'none'
    }
}))