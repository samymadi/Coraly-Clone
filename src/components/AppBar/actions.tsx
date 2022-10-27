import React from 'react'

import { 
  styled,
  Stack,
  useTheme,
  IconButton
} from '@mui/material'

//components
import AvatarNameAbstraction from '../AvatarNameAbstraction/AvatarNameAbstraction'
import {ReactComponent as Bell  } from '../../assets/icons/Bell.svg';
import {ReactComponent as ShortCut  } from '../../assets/icons/Shortcut.svg';


function Actions() {

  const {
    secondary,
    neutral,
  } = useTheme().paletteColor;


  const {
      default:defaultColor,
      disabled
  } = secondary
  return (
    <CustomStack>
        <IconButton>
            <Bell
              fill={neutral['70']}/>
        </IconButton> 
        
        <IconButton>
            <ShortCut/>
        </IconButton>   
        <AvatarNameAbstraction
            label='Fung Naant'
            sx={{
              backgroundColor:disabled,
              borderColor:defaultColor
            }}/> 
    </CustomStack>
  )
}

export default Actions


const CustomStack = styled(Stack)(({theme})=>({
  flexDirection:'row',
  alingItems:'center',
  gap:'28px',
}))