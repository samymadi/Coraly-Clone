import React,{
  useContext
} from 'react'



import BreadCrumb from '../shared/breadcrumb/breadCrumb'
import BreadcrumbsItem from './breadcrumbsItems';

import { 
  BreadCrumbContext 
} from '../breadCrumbsManager/breadCrumbsManager'

import { 
  useTheme
} from '@mui/material';


function BreadCrumbsTopBar() {

  const {
    breadCrumbsArray,
  } = useContext(BreadCrumbContext);


  const {paletteColor} = useTheme()
  return (
    <BreadCrumb>
        {breadCrumbsArray && breadCrumbsArray.map((props,index)=>(
            <BreadcrumbsItem
              key={index}
              typoStyle={{
                color:breadCrumbsArray.length === index + 1 ? paletteColor.neutral['100'] : ''
              }}
              {...props}/>
        ))}
    </BreadCrumb>
  )
}

export default BreadCrumbsTopBar