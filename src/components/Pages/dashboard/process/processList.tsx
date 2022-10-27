import React from 'react'


import {
    Stack,
    styled,
} from '@mui/material';


import AddNewProcess from './addNewProcess';
import ProcessCard from '../../../ProcessCard/ProcessCard';



const Processes = [
  {
      text:'Porcess 1',
      color:'rgba(71, 189, 255, 1)',
      private:false
  },
  {
    text:'Porcess 2',
    color:'rgba(255, 71, 181, 1)',
    private:true
  },
  {
    text:'Porcess 3',
    color:'rgba(255, 159, 71, 1)',
    private:true
  },
  {
    text:'Porcess 4',
    color:'rgba(108, 71, 255, 1)',
    private:false
  },
  {
    text:'Porcess 5',
    color:'rgba(46, 241, 206, 1)',
    private:false
  },
  {
    text:'Porcess 6',
    color:'rgba(246, 213, 36, 1)',
    private:false
  },
  {
    text:'Porcess 7',
    color:'rgba(229, 71, 255, 1)',
    private:false
  },
  {
    text:'Porcess 8',
    color:'rgba(246, 213, 36, 1)',
    private:false
  },
  {
    text:'Porcess 9',
    color:'rgba(229, 71, 255, 1)',
    private:false
  },
  

]

function ProcessList() {
  return (
    <Container>
        <AddNewProcess/>
        {Processes && Processes.map((props,index)=>(
          <ProcessCard
              key={index}
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