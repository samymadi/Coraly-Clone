import React,{
    useMemo
} from 'react'





//components
import CustomButtonIconLabel,{
    CustomButtonIconLabelProps
} from '../shared/CustomButtonIconLabel/CustomButtonIconLabel';



import CustomIconButton,{
    CustomIconButtonProps
} from '../shared/CustomIconButton/CustomIconButton';


//icons
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


interface IIconButton{
    iconName?:string
    label?:string | number
}


type IconButtonProps = IIconButton &  (CustomButtonIconLabelProps)


const  IconButton:React.FC<IconButtonProps> = ({
    label,
    iconName,
    children,
    ...rest
})=> {


    const Icon = useMemo(()=>{
        switch (iconName) {
            case 'LeftAdd':
                return {startIcon:<ControlPointIcon/>}
            case 'LeftPlay':
                return {startIcon:<PlayArrowOutlinedIcon/>}

            case 'RightPlay':
                return {endIcon:<PlayArrowOutlinedIcon/>}            
    
            default:
                return {}
        }
    },[iconName])


    if (label)
    return (<CustomButtonIconLabel
                {...Icon}
                {...rest}>
                    {label}
            </CustomButtonIconLabel>
    )
    else 
        return (<CustomIconButton
                {...rest}>
                 {children || Icon.endIcon || Icon.startIcon}      
        </CustomIconButton>)
    
  
        
}

export default IconButton