import React from 'react'


import {
    Typography as MuiTypography,
    CardContent as MuiCardContent,
    CardContentProps,
    styled
} from '@mui/material'


import {ReactComponent as Board } from '../../assets/icons/board.svg';

interface IPorcessBodyPorps{
    text?:String | number
}


export type PorcessBodyProps =  IPorcessBodyPorps & CardContentProps;

const ProcessBody:React.FC<PorcessBodyProps> = ({
    text,
    ...rest
})=> {
  return (
    <CardContent
        {...rest}>
        <Board
            fill={'white'}
            style={{
                marginBottom:'10px'
            }}/>            
        <Typography>
            {text}
        </Typography>
    </CardContent>
  )
}

export default ProcessBody




const CardContent = styled(MuiCardContent)(({theme})=>({
    position:'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    paddingTop:'0px',
    top:'-10px'

}))


const Typography = styled(MuiTypography)(({theme})=>({
        fontSize:'16px',
        fontWeight:'600',
        lineHeight:'24px',
        textAlign:'center',
        color:'white',
}))