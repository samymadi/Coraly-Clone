import React, { useState } from 'react'


import {
    Menu as MuiMenu,
    Stack, 
    styled,
    MenuProps as MuiMenuPorps,
    SxProps,
    Theme, 
} from '@mui/material';


interface IMenuPorps {
    items?:JSX.Element
    containerStyle?:SxProps<Theme>
}


export type MenuProps = IMenuPorps & MuiMenuPorps

function Menu({
    items,
    containerStyle,
    children,
    open,
    ...rest
}:MenuProps) {

  const [anchorEl,setAnchorEl] = useState(null);


  const handleClick = (e:any)=>{
    setAnchorEl(e.currentTarget)

  }
  const onClose = ()=>{
      setAnchorEl(null);
  }


  return (
    <Container
        sx={containerStyle}>
            <Wrapper
                onClick={handleClick}>
                {children}
            </Wrapper>
            <CustomMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClick={onClose}
                {...rest} >
                    {items}
                    <samp>
                        sa
                    </samp>
            </CustomMenu>
    </Container>
  )
}

export default Menu



const CustomMenu = styled(MuiMenu)(({})=>({

}));

const Container = styled(Stack)(({})=>({

}))

const Wrapper = styled('div')(({})=>({
        width:'fit-content',
        height:'fit-content'
}))