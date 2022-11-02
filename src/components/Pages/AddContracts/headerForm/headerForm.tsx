import React from 'react'


import {
    Stack,
    styled,
    useTheme,
} from '@mui/material'


//components
import AvatarGroupContracts from './avatarGroupContracts'
import IconLabel from '../../../shared/iconLabel/iconLabel'
import TicketChipGroup from './TicketChipGroup'
import ChapterSelect from './ChapterSelect'
import VendorSelect from './VendorsSelect'
import Divider from '../../../divider/divider'

//assets
import {ReactComponent as Calendar} from '../../../../assets/icons/Date.svg';

function HeaderForm() {

    const {
        neutral
    } =  useTheme().paletteColor

  return (
    <Container>
        <Wrapper>
            <AvatarGroupContracts/>
            <ChapterSelect/>
            <IconLabel
                typoStyle={{
                    fontSize:'14px',
                    fontWeight:'500',
                    color:neutral['70'],
                    marginTop:'3px'
                }}
                label="05/10/2021 - 17:50"
                rightIcon={<Calendar/>}/> 
        </Wrapper>
            <TicketChipGroup/>
        <Wrapper>
            <VendorSelect/>    
        </Wrapper>
        <Divider/>
    </Container>
  )
}

export default HeaderForm



const Container  = styled(Stack)(({})=>({
    flexWrap:'wrap',
    columnGap:'7%',
    rowGap:'7px',
    marginBottom:'16px'
    
}))


const Wrapper  = styled(Stack)(({})=>({
    flexDirection:'row',
    alignItems:'center',
    columnGap:'3%',
    rowGap:'5px',
    flexWrap:'wrap',
    
}))

