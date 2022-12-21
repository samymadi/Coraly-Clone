import React, { 
  useEffect, useState 
} from 'react'


import {
    Stack,
    styled,
} from '@mui/material';

import { 
  getProcesses 
} from '../../../../store/processes/processes.actions';


import AddNewProcess from './addNewProcess';
import ProcessCard from '../../../ProcessCard/ProcessCard';

import routesPath from '../../../../navigation/routing/routePaths';
import useThunkdDispatcher from '../../../../utils/Customhooks/useThunkdDispatcher';
import { useSelector } from 'react-redux';





function ProcessList({
    setOpen,
}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {


  const processes = useSelector((state:any)=>state.process.processes);

  const thunkDispatcher = useThunkdDispatcher();

  useEffect(()=>{
    thunkDispatcher(getProcesses());
  },[])

  const handleOpenAddNewProcess =()=>{
    setOpen(true);
  }
  return (
    <Container>
        <AddNewProcess
            onClick={handleOpenAddNewProcess}/>

        {processes && processes.map((props:any)=>(
          
            <ProcessCard
              key={props.id}
              linkProps={{
                href:`${routesPath.DASHBOARD.PROCESSES}/${props.id}`,
                to:'',
              }}
              {...props}/>
        ))}
          
    </Container>
  )
}

export default ProcessList


const Container  = styled(Stack)(({theme})=>({
    flexDirection:'row',
    flexWrap:'wrap',
    gap:"24px"

}))