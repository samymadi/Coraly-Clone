import React from 'react'


import {
    Breadcrumbs, 
    BreadcrumbsProps,   
    styled,
} from '@mui/material';



import {ReactComponent as RightArrow} from '../../../assets/icons/right_arrow.svg';



interface IBreadCrumb {

}


export type BreadCrumbComponent  =   BreadcrumbsProps & IBreadCrumb;

const  BreadCrumb:React.FC<BreadCrumbComponent>=({
    children,
    ...rest
})=>{
  return (
    <CustomBreadCrumbs
        separator={<RightArrow/>}
        {...rest}>   
        {children}
    </CustomBreadCrumbs>
  )
}

export default BreadCrumb



const CustomBreadCrumbs = styled(Breadcrumbs)(({theme})=>({

}))