import React,{
  useState,
  createContext
} from 'react'


import {
    CSSObject,
    Stack,
    Drawer as MuiDrawer, 
    styled,
    Theme,
    useTheme,
} from '@mui/material';


import DrawerHeader from './drawerHeader';
import LinksNavigation from './LinksNavigation';
import Footer from './footer';


const DRAWER_WIDTH=235

interface IContextDrawer {
  setOpen?:React.Dispatch<React.SetStateAction<boolean>>
  open?:boolean
}





export const DrawerContext = createContext<IContextDrawer>({});

function Drawer() {


  const [open, setOpen] = React.useState<boolean>(true);


  return (
    <DrawerContext.Provider 
        value={{
          setOpen,
          open
        }}>   
      <CustomDrawer
            variant="permanent" 
            open={open}
            >
          <Container>
              <DrawerHeader/>
              <LinksNavigation/>
              <Footer/>
          </Container>
      </CustomDrawer>
  </DrawerContext.Provider>
  )
}

export default Drawer




const Container  =  styled(Stack)(({theme})=>({
    padding:'30px 20px 20px 16px'
}))



const CustomDrawer =styled(MuiDrawer,{
    shouldForwardProp: (prop) => prop !== "open"
  })(({theme,open})=>({
    width: `${DRAWER_WIDTH}px`,
    maxWidth:`${DRAWER_WIDTH}px`,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
      }),
      ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
      }),
    
}))




const openedMixin = (theme: Theme): CSSObject => ({
    width: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden",
    backgroundColor:theme.paletteColor.actionSecondary.default,
  });
  


const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: `150px`,
    [theme.breakpoints.up("sm")]: {
      width: `80px`
    },
    backgroundColor:theme.paletteColor.actionSecondary.default,
  });
  