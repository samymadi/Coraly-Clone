import React from 'react'

import {
    Stack
} from '@mui/material';



import CustomButtonIconLabel from '../../shared/CustomButtonIconLabel/CustomButtonIconLabel';


const CANCEL='Cancel';
const SAVE='Save';

function FooterActions() {
  return (
    <Stack
        direction='row'
        alignItems='center'
        gap='16px'>
        <CustomButtonIconLabel
            variant='outlined'
            size='large'>
                {CANCEL}
        </CustomButtonIconLabel>

        <CustomButtonIconLabel
            color='secondary'
            size='large'>
                {SAVE}
        </CustomButtonIconLabel>
        
    </Stack>
  )
}

export default FooterActions