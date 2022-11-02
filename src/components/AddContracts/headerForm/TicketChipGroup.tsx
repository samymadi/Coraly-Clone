import React from 'react'


import GroupWithAddActions from './groupWithAddActions'
import Chip from '../../chip/chip'
import { useTheme } from '@mui/material'




function TicketChipGroup() {

  const {
        sky,
        magenta,
        orange,
  } = useTheme().paletteColor.accent    

  return (
    <GroupWithAddActions
            gap='8px'>
            <Chip
                extraSize='extra-small'
                extraColor={sky}
                label={'Label 1'}/>
            <Chip
                extraSize='extra-small'
                extraColor={magenta}
                label={'Label 2'}/>
            <Chip
                extraSize='extra-small'
                extraColor={orange}
                label={'Label 3'}/>        
    </GroupWithAddActions>
  )
}

export default TicketChipGroup