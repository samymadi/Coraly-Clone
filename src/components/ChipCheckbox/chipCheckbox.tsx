import React, { 
    FunctionComponent,
    SVGProps,
    useMemo 
} from 'react'



import { 
    styled,
    Typography as MuiTypography,
    Stack,
    useTheme
} from '@mui/material'



import CheckBoxLabel from '../shared/checkBoxLabel/checkBoxLabel'
import CheckboxInput,{
    CheckBoxInputProps
} from '../shared/checkBoxLabel/checkboxInput'



//assets



const COLOR_OPCITY_HEXA ="33";

interface IChipCheckboxProps{
    label:string,
    postLabel?:string | number
    actifColor:string,
    ChecboxIcon?:any,
}



export type ChipCheckBoxProps   =  IChipCheckboxProps & CheckBoxInputProps


const  ChipCheckbox:React.FC<ChipCheckBoxProps> = ({
    label,
    postLabel,
    actifColor,
    ChecboxIcon:Icon,
    value,
    sx,
    ...rest
})=> {


    const {
        neutral
    } = useTheme().paletteColor;


    const styledIcon = useMemo(()=>( 
    Icon && <Icon
                style={{
                    width:'16px',
                    height:'16px',
                }}
                fill={value ? neutral['80'] : neutral['60'] }
                >
            </Icon> 
    ),[Icon,value,neutral])


    const isPostLabelVisible  = postLabel && value;


  return (
    <CustomCheckBoxLabel
        sx={{
            backgroundColor:value ?`${actifColor}${COLOR_OPCITY_HEXA}`:"",
            "& svg":{
                display: !Icon ? 'none':""
            },
            ...sx
        }}
        label={<LabelContainer>
                    <LabelTypography
                    sx={{
                        color:!value ? neutral['60'] : "" 
                    }}
                    >
                        {label} &nbsp;
                    </LabelTypography>
                    { isPostLabelVisible === true && <PostLabelTypography>
                                                        {`: ${postLabel}`}    
                                                    </PostLabelTypography>
                    }
                </LabelContainer>}

        control={<CustomCheckBoxInput
                    checkedIcon={styledIcon}
                    icon={styledIcon}
                    value={value}  
                     {...rest}/>}
        />
        
        
        
  )
}

export default ChipCheckbox



const CustomCheckBoxLabel = styled(CheckBoxLabel)(({theme})=>({
        padding:'5px 8px',
        borderRadius:'4px',
        minWidth:'fit-content',
}))

const CustomCheckBoxInput = styled(CheckboxInput)(({theme})=>({
   marginRight:'9px',
   padding:'0',
   "& input":{
    padding:0
   }
}))


const LabelTypography = styled(MuiTypography)(({theme})=>({
    userSelect:'none',
    fontSize:'12px',
    fontWeight:'600',
    lineHeight:'18px',
    color:theme.paletteColor.neutral['80']
}))

const PostLabelTypography = styled(LabelTypography)(({theme})=>({
    color:theme.paletteColor.neutral['100']
}))




const LabelContainer =  styled(Stack)(({})=>({
    flexDirection:'row',
    alignItems:'center',
}))