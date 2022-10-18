import React,{
    memo
} from 'react'


import { FormControl, styled } from '@mui/material'
// import { styled } from '@mui/material'

import TextFields from './textfields'



function Form() {
  return (
    <CustomFormControl>
            <TextFields/>
    </CustomFormControl>
  )
}

export default memo(Form)



const CustomFormControl = styled(FormControl)(()=>({
    marginTop:'50px'
}))