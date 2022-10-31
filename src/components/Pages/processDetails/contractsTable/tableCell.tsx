import React from 'react'


import {
    styled,
    Stack,
    TableCell as MuiCell,
    TableCellProps,
} from '@mui/material';



function TableCell(props:TableCellProps) {
  return (
    <Cell {...props}/>
  )
}

export default TableCell



const Cell = styled((props:TableCellProps)=>(
  <MuiCell {...props}/>

))(({theme})=>({
    flexDirection:'row',
    alignItems:'center',
    border:`1.5px solid ${theme.paletteColor.neutral['10']}`,
    borderTop:`1px solid ${theme.paletteColor.neutral['10']}`,
    borderBottom:`1px solid ${theme.paletteColor.neutral['10']}`,
    maxHeight:'36px',
    padding:'6px 0',
    paddingLeft:'6px'
}))





