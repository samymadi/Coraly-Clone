import { useTheme } from '@mui/material'
import React from 'react'
import TitleDescTemp from '../../../shared/titleDescTemp'

const FASE_ID ='Fase ID: '

function TextId() {

    const {
        neutral
    } = useTheme().paletteColor;
  return (
    <TitleDescTemp
        sx={{
            flexDirection:'row',
            
            color:neutral['90']
        }}
        descStyle={{
            fontSize:'16px',
            lineHeight:'24px'
        }}
        titleStyle={{
            fontSize:'16px',
            lineHeight:'24px',
            marginRight:'5px'
        }}
        title={FASE_ID} 
        description='61571535e7058c00143322b8'/>
    )
}

export default TextId