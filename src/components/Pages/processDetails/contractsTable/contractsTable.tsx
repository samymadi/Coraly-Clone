import React from 'react'


import {
    Table as MuiTable,
    TableBody,
    styled,
} from '@mui/material';

import TableRow from './tableRow';

const createData  =(id:string,name:string,phone:string,ticket:string,name2:string,date:string)=>({
  id,
  name,
  phone,
  ticket,
  name2,
  date
})

const data = new Array(15).fill(createData('VOD-153','Theresa Webb',"+39  065262123","IT069823456","Alessandro Durni",'3/25/2021'))
  



function ContractsTable() {
  return (
    <CustomTable>
        
        <TableBody>
          {data.map((data:any,index:number)=>(
            <TableRow
              key={data.id}
              {...data}/>
          ))
          }
        </TableBody>
    </CustomTable>
  )
}

export default ContractsTable



const CustomTable = styled(MuiTable)(({})=>({
  minWidth:'fit-content',
  overflowX:'scroll',
  width:'100%',
    "& tr:first-child td":{
      borderTop:'none',
    }
}))



