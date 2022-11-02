import React from 'react'


import {
    IconButtonProps
} from '@mui/material';

import IconButton from '../shared/iconButton/iconButton'

function ContractsIconButton(props:IconButtonProps) {
  return (
    <IconButton
        sx={{
            "& svg":{
                width:'20px',
                height:'20px'
            }
        }}
        {...props}
        />
  )
}

export default ContractsIconButton