import React from 'react'


import {
  styled,
}from '@mui/material';


import Group from './group';

import useDrawer from '../../utils/Customhooks/useDrawer';


//assets
import {ReactComponent as LeftAlignment} from '../../assets/icons/left_alignment.svg';


function DrawerHeader() {

  const {
    setOpen,
  } = useDrawer();

  const handleCloseOpenDrawer = ()=>{
      setOpen && setOpen(prec=>!prec);
  }


  


  return (
    <CustomDrawerHeader>
      <LeftAlignment
        onClick={handleCloseOpenDrawer}
        fill='white'
        width='24px'
        style={{
          marginBottom:'30px',
          marginLeft:'8px',
          cursor:'pointer'
        }}
        />
      <Group/>
    </CustomDrawerHeader>
  )
}

export default DrawerHeader



const CustomDrawerHeader = styled('div')(({theme})=>({
   marginBottom:'24px',
   marginLeft:'4px'
}))