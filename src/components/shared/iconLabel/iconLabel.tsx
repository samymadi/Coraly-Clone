import React from 'react'


import {
    Stack as MuiStack,
    Typography as MuiTypography,
    StackProps,
    styled,
    SxProps,
    Theme
} from '@mui/material';


import { 
    Text 
} from '../../../_types/basicType';


interface IIconLabel{
    label:Text,
    rightIcon?:JSX.Element
    leftIcon?:JSX.Element
    typoStyle?: SxProps<Theme>
}

const IconLabel:React.FC<IIconLabel & StackProps > = ({
    leftIcon,
    rightIcon,
    label,
    typoStyle,
    ...rest
})=> {
  return (
    <Stack
        {...rest}>
        {rightIcon}
        <Typography
            sx={typoStyle}>
            {label}
        </Typography>
        {leftIcon}
    </Stack>
  )
}

export default IconLabel



const Stack = styled(MuiStack)(({theme})=>({
    flexDirection:'row',
    alignItems:'center',
    gap:'6px',
    "& svg":{
        fill:theme.paletteColor.neutral['70'],
    }
}))


const Typography = styled(MuiTypography)(({})=>({
    
}))