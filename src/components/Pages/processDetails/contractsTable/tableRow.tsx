import React from 'react'


import {
    styled,
    TableRow as MuiTableRow ,
}   from '@mui/material';


import TableCell from './tableCell';
import AvatarText from './avatarText';
import TypoCell from './TypoCell';

function TableRow({
    number,
    name,
    phone,
    ticket,
    name2,
    date,

}:any) {
  return (
    <MuiTableRow>
                <TableCell  
                        width='64px'>
                </TableCell>  
                <TableCell 
                    width='160px'>
                    <TypoCell>
                        {number}
                    </TypoCell>     
                </TableCell>   
                <TableCell 
                    width='310px'>
                    <TypoCell>
                        {name}
                    </TypoCell>     
                </TableCell>  
                <TableCell 
                    width='200px'>
                    <TypoCell>
                        {phone}
                    </TypoCell>     
                </TableCell>  
                <TableCell 
                    width='200px'>
                    <TypoCell>
                        {ticket}
                    </TypoCell>     
                </TableCell>
                <TableCell
                    width='180px'>
                    <AvatarText
                        text={name2}/>
                </TableCell> 
                <TableCell 
                    width='200px'>
                    <TypoCell>
                        {date}
                    </TypoCell>     
                </TableCell>   
    </MuiTableRow>
  )
}

export default TableRow



const CustomTableRow = styled(MuiTableRow)(({})=>({

}))