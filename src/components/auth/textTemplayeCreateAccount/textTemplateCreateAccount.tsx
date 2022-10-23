import React from 'react'


import {
    Stack, useTheme
} from '@mui/material';


import Typography from '../../shared/typography/typography';
import TextRedirection,{
  TextRedirectionProps
} from '../../textRedirection/textRedirection';



interface  TextTemplateCreateAccountProps {
  label:String| number
  textRedirection:TextRedirectionProps


}

const  TextTemplateCreateAccount:React.FC<TextTemplateCreateAccountProps> = ({
  label,
  textRedirection
})=> {

  const {
    paletteColor
  } = useTheme();
  
  return (
    <Stack
        direction='row'
        alignItems='center'>
        <Typography
            sx={{
                color:paletteColor.neutral['80'],
                fontSize:'14px',
                marginRight:'4px'}}>
            {label}
        </Typography>
        <TextRedirection
            {...textRedirection}/>
    </Stack>
  )
}

export default TextTemplateCreateAccount