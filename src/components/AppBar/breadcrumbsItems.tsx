import React from 'react'


import { 
    Typography ,
    styled,
    Theme,
    SxProps
} from '@mui/material'

import Link,{
    LinkProps
} from '../Link/link'


interface IBreadcrumbItemProps{
    typoStyle?:SxProps<Theme>
    label?:string | number
}
export type  BreadcrumbsItemProps = IBreadcrumbItemProps &  LinkProps

const BreadcrumbsItem:React.FC<BreadcrumbsItemProps>=({
    typoStyle,
    label,
    ...rest
})=> {
  return (
    <Link
        {...rest}>
        <CustomTypography
            sx={typoStyle}>
            {label}
        </CustomTypography>
    </Link>
  )
}

export default BreadcrumbsItem



const CustomTypography = styled(Typography)(({theme})=>({
    fontSize:'20px',
    fontWeight:'600',
    lineHeight:'36px',
    color:theme.paletteColor.neutral['60']
}))


