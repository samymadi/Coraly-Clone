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


function useBreadCurmbs(element:BreadcrumbsItemProps,root?:boolean){


    const {
        setBreadCrumbsArray,
    } = useContext(BreadCrumbContext)


    useEffect(()=>{
        onMount();
        return onUnMount;
    },[])


    const onMount = ()=>{
        if(root) reset();   
        setBreadCrumbsArray && setBreadCrumbsArray(prec=>[...prec,element]);
    }

    const onUnMount = ()=>{
        if(!root) setBreadCrumbsArray && setBreadCrumbsArray(prec=>prec.filter(item=>item!==element));
    }   


    const reset =()=>setBreadCrumbsArray && setBreadCrumbsArray([]);

    
}


export default useBreadCurmbs;