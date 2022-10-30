import React from 'react'


import {
    styled,
} from '@mui/material';


import Modal,{
    ModalProps
} from '../shared/modal/modal'

function CoralyModal({
    children,
    containerStyle,
    ...rest
}:ModalProps) {
  return (
    <CustomModal
        containerStyle={{
                borderRadius:'15px',  
                padding:'24px',      
                ...containerStyle
            }}
        {...rest}>
        {children}
    </CustomModal>
  )
}

export default CoralyModal



const CustomModal = styled(Modal)(({theme})=>({

}))