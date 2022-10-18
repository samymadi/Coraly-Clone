import React,{
    memo, 
    PropsWithChildren
} from 'react'


import {
    Stack,
    Typography,
    //----------------Types
    StackProps,
    TypographyProps
} from '@mui/material';


import {
  styled
} from '@mui/material/styles';


interface TitleDescTempProps extends PropsWithChildren{
  title:string | number
  description:string|number
  containerStyle?:StackProps,
  titleStyle? :TypographyProps,
  descStyle?:TypographyProps

}



type TitleDescTempComponent  = React.FC<TitleDescTempProps>

const  TitleDescTemp:TitleDescTempComponent = ({
  title,
  description,
  containerStyle,
  titleStyle,
  descStyle
})=>{
  return (
    <StackContainer
        {...containerStyle}>
        <TitleTypo
          {...titleStyle}>
          {title}
        </TitleTypo>

        <DescTypo
            {...descStyle}>
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


