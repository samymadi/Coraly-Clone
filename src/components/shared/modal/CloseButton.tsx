import React from 'react'


import {
    IconButton,
    styled,
    useTheme
} from '@mui/material'


//assets
import {ReactComponent as Close } from '../../../assets/icons/Close.svg';

import useModal from '../../../utils/Customhooks/useModal';



function CloseButton() {

    const {
        paletteColor
    } = useTheme();  

    const {
        setOpen
    } =   useModal();


    const handleCloseModal = ()=>{
        setOpen && setOpen(false);
    }


  return (
    <CustomIconButton
        onClick={handleCloseModal}>
        <Close
            fill={paletteColor.neutral['50']}
            style={{
                height:'20px',
                width:'20px'
            }}
            />
    </CustomIconButton>
  )
}

export default CloseButton


const CustomIconButton = styled(IconButton)(({})=>({
        position:'absolute',
        top:'24px',
        right:'10px',
}))