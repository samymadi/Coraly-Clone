import React, {  } from 'react'




import {
    Collapse as MuiCollpase,
    CollapseProps, 
    styled,

} from '@mui/material';



function Collapse({
  children,  
  ...rest
}:CollapseProps) {
  return (
    <CustomCollapse
      {...rest}>
        {children}
    </CustomCollapse>
  )
}

export default Collapse



const CustomCollapse =  styled(MuiCollpase)(({})=>({

}))