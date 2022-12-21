import React from 'react'


import {
    styled
} from '@mui/material';

import CollapseHedear,{
    CollapseHedearProps
} from '../shared/Collapse/collapseHedear'


function HeaderFormCollapse(props:CollapseHedearProps) {
  return (
    <CustomFormCollapseHeader
        {...props}/>
  )
}

export default HeaderFormCollapse



const CustomFormCollapseHeader = styled(CollapseHedear)(({theme})=>({
    backgroundColor:theme.paletteColor.backgroundColor.default1,
    borderRadius:'8px',
}))