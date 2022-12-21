import React,{
    memo, 
} from 'react'


import {
    Stack,
    Typography,
    //----------------Types
    StackProps,
    TypographyProps,
    SxProps,
    Theme
} from '@mui/material';


import {
  styled
} from '@mui/material/styles';


 interface ITitleDescTempProps {
  title:string | number
  description:string|number
  titleStyle? :TypographyProps,
  descStyle?:TypographyProps

}


export type TitleDescTempProps = StackProps & ITitleDescTempProps




const  TitleDescTemp:React.FC<TitleDescTempProps> = ({
  title,
  description,
  titleStyle,
  descStyle,
  ...rest
})=>{
  return (
    <StackContainer
        {...rest}>
        <TitleTypo
          sx={titleStyle}>
          {title}
        </TitleTypo>

        <DescTypo
            sx={descStyle}>
          {description}
        </DescTypo>
    </StackContainer>
  )
}

export default memo(TitleDescTemp)



const StackContainer = styled(Stack)(()=>({

}))
const TitleTypo = styled(Typography)(({theme})=>({
    fontWeight:'bold',
    fontSize:'24px',
    lineHeight:'36px',
    marginBottom:'6px',
    color:theme.paletteColor.neutral[90]
    

}))
const DescTypo = styled(Typography)(({theme})=>({
    fontWeight:'normal',
    fontSize:'14px',
    lineHeight:'18px',
    color:theme.paletteColor.neutral[70]

}))


