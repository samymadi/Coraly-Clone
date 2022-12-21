import React from 'react'

import { 
    Stack,
    StackProps,
    styled,
    useTheme, 
} from '@mui/material'


import IconLabel from '../shared/iconLabel/iconLabel'
import Chip from '../chip/chip'

//assets
import {ReactComponent as Standard} from '../../assets/icons/Standard.svg';


//types
import { 
    Text 
} from '../../_types/basicType'

export interface IHeaderForm1Props{
    label?:Text
    icon?:JSX.Element,
    ready?:boolean
}


const READY='Ready'


function HeaderForm1({
    label,
    icon,
    ready,
    ...rest
}:StackProps & IHeaderForm1Props) {


    const {
        neutral,
        primary
    } = useTheme().paletteColor
  return (
    <Container
        {...rest}>
        <IconLabel
            label={label}
            rightIcon={ icon || <Standard/> }
            typoStyle={{
                position:'relative',
                fontWeight:'700',
                fontSize:'18px',
                lineHeight:'27px',
                color:neutral['90'],
                top:'1px'
            }}
            sx={{
                "& svg":{
                    fill:primary.default,
                    marginRight:'5px'
                }
            }}
            
            />
        {ready && <Chip
                        extraSize='extra-small'
                        label={READY}/>
        }
                            
    </Container>
  )
}

export default HeaderForm1



const Container  = styled(Stack)(({theme})=>({
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:'0.98',
}))