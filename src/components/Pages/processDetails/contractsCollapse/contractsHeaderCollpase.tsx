import React from 'react'


import {
        styled,
} from '@mui/material'

import CollapseHedear,{
    CollapseHedearProps
} from '../../../shared/Collapse/collapseHedear'

import ActionsBar from './actionsBar'



function ContractsHeaderCollpase(props:CollapseHedearProps) {
 
    
    return (
    <CustomCollapseHedear
        sx={{
            justifyContent:'flex-start',
            padding:'16px 0px 16px 8px',
        }}
        leftDropDown
        {...props}>
            <ActionsBar/>
    </CustomCollapseHedear>
  )
}

export default ContractsHeaderCollpase

const CustomCollapseHedear = styled(CollapseHedear)(({theme}) =>({
    marginTop:'3px',
    backgroundColor:theme.paletteColor.backgroundColor.default1,
}))