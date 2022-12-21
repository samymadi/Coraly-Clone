import React,{
    useContext
} from 'react'

import { 
    DrawerContext 
} from "../../components/NavigationDrawer/drawer";

export default function useDrawer(){
        return useContext(DrawerContext);
}   


