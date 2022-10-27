import React, { useState } from 'react'


import { styled } from '@mui/material'


import Input from '../../../shared/input/input'


const PROCESS_NAME='Process name';
const COLOR='Color';

function AddNewProcessbodyModal() {


    const [state1,setState1] = useState('');
    const [state2,setState2] = useState('');

  return (
      <Container>
        <Input
            label={PROCESS_NAME}
            setValue={setState2}
            sx={{
                marginBottom:'24px',
            }}/>
        <Input
            type='color'
            label={COLOR}
            setValue={setState1}
            />
    </Container>
  )
}

export default AddNewProcessbodyModal



const Container = styled('div')(({})=>({
    display:'flex',
    flexDirection:'column',
    marginBottom:'24px',
}))