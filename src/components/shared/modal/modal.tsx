import React, {
   useState,
   createContext,
   Fragment

} from 'react'


//components
import { 
    Modal as MuiModal, 
    ModalProps as MuiModalProps, 
    styled,
    SxProps, 
    Theme
} from '@mui/material'


import CloseButton from './CloseButton'


//context types
export interface ModalContextType {
  open?:boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>

}

interface IModalProps{
  containerStyle?:SxProps<Theme>
  open:boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}




export const ModalContext = createContext<ModalContextType>({})

export type  ModalProps = MuiModalProps & IModalProps

const  Modal:React.FC<ModalProps> =({
  children,
  containerStyle,
  open,
  setOpen,
  ...rest
})=> {


  return (
  <ModalContext.Provider value={{
        open,
        setOpen,
      }}>
        <StyledModal
            {...rest}
            open={open}
            >
            <Container
                sx={containerStyle}>
                  <CloseButton/>
                  {children}
            </Container>
        </StyledModal>
  </ModalContext.Provider>
  )
}

export default Modal



const StyledModal = styled(MuiModal)(({theme})=>({
  "&.MuiBackdrop-root":{
  
    }

}))


const Container = styled('div')(({})=>({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor:'white',
  width:'500px',
  border:'none',
  outline:'none'
}))