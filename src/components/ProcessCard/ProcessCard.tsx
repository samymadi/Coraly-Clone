import React, { 
    useMemo,
    Fragment,
    memo
} from 'react'


import {
    Card as MuiCard,
    CardProps,
    styled
} from '@mui/material'; 

import Link,{
    LinkProps
} from '../Link/link';

import Tooltip from '../shared/tooltip/tooltip';
import ProcessHeader from './ProcessHeader';
import ProcessBody from './processBody';


interface IProcessCardProps{
    _id:number
    color:string
    text?:string | number,
    private?:boolean,
    linkProps?:LinkProps
}


export type ProcessCardProps =  IProcessCardProps &  CardProps;


const THIS_IS_PRIVATE_PROCESS = 'This is a private process';

const  ProcessCard:React.FC<ProcessCardProps> = ({
    private :_private,
    color,
    text,
    linkProps

})=> {


    const wrapper = useMemo(()=> (_private?:boolean,children?:JSX.Element,props:LinkProps={href:'',to:''})=>{
        if(_private) return <Fragment>{children}</Fragment>
            else return <Link {...props}>{children}</Link>
    },[]);

  return (
   wrapper(_private, <Tooltip
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
                      </Tooltip>,
            linkProps
        )
  )
}

export default memo(ProcessCard)



const Card = styled(MuiCard)(({theme})=>({
    width:'150px',
    maxWidth:'150px',
    minHeight:'150px',
    boxShadow:'none',
    borderRadius:'8px',

}))