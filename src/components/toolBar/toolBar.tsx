import React from 'react'

import { 
    styled,
    Stack as MuiStack, 
} from '@mui/material'


import Actions from './actions'
import Filter from './filter'


function ToolBar() {
  return (
    <Stack>
        <Filter/>
        <Actions/>
    </Stack>
  )
}

export default ToolBar


const Stack = styled(MuiStack)(({theme})=>({
    flexDirection:'row',
    alignItems:'center',
    // flexWrap:'wrap',
    justifyContent:'space-between',
    padding:'12px 24px 16px 24px',
    overflowX:'scroll',
    boxShadow:`0px 1px 3px ${theme.paletteColor.neutral['10']}`,
  "&::-webkit-scrollbar":{
    display:'none',
  }
}))