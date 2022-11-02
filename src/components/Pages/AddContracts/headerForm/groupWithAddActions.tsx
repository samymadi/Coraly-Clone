import React from 'react'

//components
import GroupWithActions,{
    GroupWithActionsProps
} from '../../../groupWithActions/groupWithActions'

import IconButton from '../../../shared/iconButton/iconButton'


//material ui
import { 
    useTheme 
} from '@mui/material'




//assets
import {ReactComponent as Add} from '../../../../assets/icons/Add_New.svg'; 


function GroupWithAddActions({
    children,
    ...rest
}:GroupWithActionsProps ) {



    const {
        primary,
    } = useTheme().paletteColor;

  return (
    <GroupWithActions   
        {...rest}>
        {children}
        <IconButton
            sx={{
                padding:'0',
                marginLeft:'4px',
                marginTop:'1px',
                "& svg":{
                    fill:primary.default
                }
            }}>
            <Add/>
        </IconButton>
    </GroupWithActions>
  )
}

export default GroupWithAddActions