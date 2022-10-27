import React, { 
    useMemo,
    ReactFragment
} from 'react'


import {
    Card as MuiCard,
    CardProps,
    styled
} from '@mui/material'; 

import Tooltip from '../shared/tooltip/tooltip';
import ProcessHeader from './ProcessHeader';
import ProcessBody from './processBody';


interface IProcessCardProps{
    color:string
    text?:string | number,
    private?:boolean
}


export type ProcessCardProps =  IProcessCardProps &  CardProps;


const THIS_IS_PRIVATE_PROCESS = 'This is a private process';

const  ProcessCard:React.FC<ProcessCardProps> = ({
    private :_private,
    color,
    text

})=> {

  return (
    <Tooltip
        title={_private && THIS_IS_PRIVATE_PROCESS}>
        <Card
            sx={{
                backgroundColor:color
            }}>
            {_private && <ProcessHeader/> }   
            <ProcessBody
                sx={{
                    top:!_private ? '31px':""
                }}
                text={text}/>
        </Card>
    </Tooltip>
  )
}

export default ProcessCard



const Card = styled(MuiCard)(({theme})=>({
    width:'150px',
    maxWidth:'150px',
    minHeight:'150px',
    boxShadow:'none',
    borderRadius:'8px',

}))