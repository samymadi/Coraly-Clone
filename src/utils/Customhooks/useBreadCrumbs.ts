import React, { 
    useEffect,
    useContext
} from "react";


import { 
    BreadCrumbContext
} from "../../components/breadCrumbsManager/breadCrumbsManager";


import {
    BreadcrumbsItemProps
} from "../../components/AppBar/breadcrumbsItems";


function useBreadCurmbs(element:BreadcrumbsItemProps){

    const {
        setBreadCrumbsArray,
        breadCrumbsArray
    } = useContext(BreadCrumbContext)


    console.log(element,breadCrumbsArray);
    useEffect(()=>{
        onMount();
        return onUnMount;
    },[])


    const onMount = ()=>{
        setBreadCrumbsArray && setBreadCrumbsArray(prec=>[...prec,element]);
    }

    const onUnMount = ()=>{
        setBreadCrumbsArray && setBreadCrumbsArray(prec=>prec.filter(item=>item!==element));
    }   

    
}


export default useBreadCurmbs;