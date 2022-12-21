import React from 'react'



import {
    Tooltip as MuiTooltip,
    TooltipProps,
    styled
}from '@mui/material'


interface ITooltiProps {

}


export type ToolTipComponentProps = ITooltiProps &  TooltipProps;

const  Tooltip:React.FC<ToolTipComponentProps> = ({
    children,
    ...rest
})=> {
  return (
    <CustomToolTip
        placement='top'
        arrow
        {...rest}>
            {children}
    </CustomToolTip>
  )
}

export default Tooltip




const CustomToolTip = styled(MuiTooltip)(({theme})=>({

}))