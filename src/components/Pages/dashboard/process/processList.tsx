import React from 'react'


import {
    Stack,
    styled,
} from '@mui/material';


import AddNewProcess from './addNewProcess';
import ProcessCard from '../../../ProcessCard/ProcessCard';

import routesPath from '../../../../navigation/routing/routePaths';




const Processes = [
  {
    _id:1,
    text:'Porcess 1',
    color:'rgba(71, 189, 255, 1)',
    private:false
  },
  {
    _id:2,
    text:'Porcess 2',
    color:'rgba(255, 71, 181, 1)',
    private:true
  },
  {
    _id:3,
    text:'Porcess 3',
    color:'rgba(255, 159, 71, 1)',
    private:true
  },
  {
    _id:4,
    text:'Porcess 4',
    color:'rgba(108, 71, 255, 1)',
    private:false
  },
  {
    _id:5,
    text:'Porcess 5',
    color:'rgba(46, 241, 206, 1)',
    private:false
  },
  {
    _id:6,
    text:'Porcess 6',
    color:'rgba(246, 213, 36, 1)',
    private:false
  },
  {
    _id:7,
    text:'Porcess 7',
    color:'rgba(229, 71, 255, 1)',
    private:false
  },
  {
    _id:8,
    text:'Porcess 8',
    color:'rgba(246, 213, 36, 1)',
    private:false
  },
  {
    _id:9,
    text:'Porcess 9',
    color:'rgba(229, 71, 255, 1)',
    private:false
  },

]

function ProcessList({
    setOpen,
}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {


  const handleOpenAddNewProcess =()=>{
    setOpen(true);
  }
  return (
    <Container>
        <AddNewProcess
            onClick={handleOpenAddNewProcess}/>

        {Processes && Processes.map((props,index)=>(
          
            <ProcessCard
              key={index}
              linkProps={{
                href:`${routesPath.DASHBOARD.PROCESSES}/${props._id}`,
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