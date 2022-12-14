import React from 'react'



import {
    Stack,
    styled,
    SxProps,
    Theme,
    ButtonBase,
    useTheme,
} from '@mui/material';



import Menu,{
    MenuProps
} from '../shared/Menu/menu';
import IconLabel from '../shared/iconLabel/iconLabel';



import {ReactComponent as DownArrow} from '../../assets/icons/down_arrow.svg';



interface ISelectProps {
    value:any,
    setValue:React.Dispatch<React.SetStateAction<any>>
    iconLabelStyle?:SxProps<Theme>
    leftIcon?:JSX.Element

}

function Select({
    value,
    children,
    iconLabelStyle,
    leftIcon,
    ...rest
}:MenuProps & ISelectProps) {


    const {neutral} = useTheme().paletteColor
    
  return (
    <Menu
        {...rest}
        open={true}>
        {children ||
            <CustomBaseButton>
                <IconLabel
                    sx={iconLabelStyle}
                    typoStyle={{
                        color:neutral['70'],
                        fontWeight:'600',
                        fontSize:'14px',
                    }}
                    rightIcon={leftIcon}
                    leftIcon={<DownArrow/>}
                    label={value}/> 
             </CustomBaseButton>
        }
    </Menu>
  )
}

export default Select



const Container = styled(Stack)(({})=>({

}))


const CustomBaseButton = styled(ButtonBase)(({})=>({
    padding:'4px 4px',
    borderRadius:'5px'
}))
