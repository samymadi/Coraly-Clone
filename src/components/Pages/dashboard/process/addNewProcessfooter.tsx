import React from 'react'


import {
    Stack,
    styled
} from '@mui/material';


import CustomButtonIconLabel from '../../../shared/CustomButtonIconLabel/CustomButtonIconLabel';


const CREATE="Create";
const CANCEL="Cancel";


function AddNewProcessfooter() {
  return (
    <StyledStack>
            <CustomButtonIconLabel
                variant='outlined'
                size='large'
                sx={{
                    width:'fit-content',
                }}>
                    {CREATE}
            </CustomButtonIconLabel>
            <CustomButtonIconLabel
                color='secondary'
                size='large'
                sx={{
                    width:'fit-content'
                }}>
                    {CANCEL}
            </CustomButtonIconLabel>

    </StyledStack>
  )
}

export default AddNewProcessfooter


const StyledStack = styled(Stack)(({})=>({
    flexDirection:'row',
    justifyContent:'flex-end',
    gap:"16px"
}))