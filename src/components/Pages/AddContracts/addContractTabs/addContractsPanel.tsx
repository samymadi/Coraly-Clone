import React, { Fragment, PropsWithChildren } from 'react'





import {
  Stack,
  styled 
} from '@mui/material'


interface IAddContractsPanel extends PropsWithChildren {
  index: number;
  value: number;
}


function AddContractsPanel({
  children,
  index,
  value,
}:IAddContractsPanel) {
  return (
    <CustomTabPanel>
        {value===index  && (<Fragment>{children}</Fragment>)}
        
    </CustomTabPanel>
  )
}

export default AddContractsPanel



const CustomTabPanel= styled(Stack)(({theme})=>({
  
}))