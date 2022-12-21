import React,{
  useEffect,
} from 'react'


import {
    Table as MuiTable,
    TableBody,
    styled,
} from '@mui/material';

import TableRow from './tableRow';

import { 
  getContracts 
} from '../../../../store/contract/contract.actions';

import { 
  useSelector 
} from 'react-redux';

import useThunkdDispatcher from '../../../../utils/Customhooks/useThunkdDispatcher';



function ContractsTable() {

  const contracts = useSelector((state:any)=>state.contract.contracts)
  const thunkDispatcher = useThunkdDispatcher();

  console.log(contracts);

  useEffect(()=>{
    thunkDispatcher(getContracts());
  },[])
  return (
    <CustomTable>
        
        <TableBody>
          {contracts && contracts.map((data:any,index:number)=>(
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



