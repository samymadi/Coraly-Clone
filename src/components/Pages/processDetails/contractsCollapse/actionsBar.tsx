import React,{
    useState
} from 'react'

import { 
    styled,
    Stack,
    useTheme,
    Typography,
    IconButton
} from '@mui/material'


import ChipCheckbox from '../../../ChipCheckbox/chipCheckbox';

//assets
import {ReactComponent as Start} from '../../../../assets/icons/Start.svg';
import {ReactComponent as AddNew} from '../../../../assets/icons/Add_New.svg';
import {ReactComponent as More} from '../../../../assets/icons/More.svg';




const NEW_CONTACT ='New Contract';

function ActionsBar() {

    const [state,setState]  =  useState<boolean>(false);

    const {
        primary,
        neutral,
    }=useTheme().paletteColor;

  return (
    <Container>
        <Start
            fill={primary.default}/>
        <TextTypo>
            {NEW_CONTACT}
        </TextTypo>
        {/* <ChipCheckbox
            value={state}
            setValue={setState}
            label='8 Cards'
            actifColor='#512'/> */}
        <CustomIconButton>
                <AddNew/>
        </CustomIconButton>  
        <CustomIconButton>
                <More
                    style={{
                        fill:neutral['50']
                    }}
                    />
        </CustomIconButton>    
    </Container>
  )
}

export default ActionsBar



const Container  = styled(Stack)(({})=>({
    flexDirection:'row',
    alignItems:'center',
    gap:'8px',
    marginLeft:'12px'
        
}))


const TextTypo = styled(Typography)(({theme})=>({
    fontSize:'14px',
    lineHeight:'18px',
    fontWeight:'600',
    color:theme.paletteColor.neutral['100'],
}))


const CustomIconButton = styled(IconButton)(({theme})=>({
        padding:'0px',
        "& svg":{
            fill:theme.paletteColor.primary.default,
            width:'20px',
            height:'20px',
        }
}))