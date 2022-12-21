import React, { useState } from 'react'


import { 
    styled,
    InputAdornment,
    useTheme
 } from '@mui/material'


import Input from '../../../shared/input/input'



//assets
import {ReactComponent as ColorPalette} from '../../../../assets/icons/color_palette.svg';


const PROCESS_NAME='Process name';
const COLOR='Color';

function AddNewProcessbodyModal() {


    const {
        paletteColor
    } =  useTheme();


    const [state1,setState1] = useState('');
    const [state2,setState2] = useState('');

  return (
      <Container>
        <Input
            label={PROCESS_NAME}
            setValue={setState2}
            sx={{
                marginBottom:'24px',
            }}/>
        
            <ColorInput
                    type='color'
                    label={COLOR}
                    setValue={setState1}
                    InputProps={{
                            endAdornment:(<InputAdornment
                                                position='end'>
                                                    <ColorPalette
                                                        style={{
                                                            position:'absolute',
                                                            right:'13px'
                                                        }}
                                                        fill={paletteColor.neutral['50']}/>
                                            </InputAdornment>)
                    }}
                />
            </Container>
  )
}

export default AddNewProcessbodyModal



const Container = styled('div')(()=>({
    display:'flex',
    flexDirection:'column',
    marginBottom:'24px',
}))


const ColorInput = styled(Input)(({theme})=>({
    

    "& input":{
        "-webkit-appearance": "none",
        appearance:'none',
        padding:"0", 
        paddingLeft:"10px",
        width: "27px",
        height: "30px",  
         
        "&::-webkit-color-swatch":{
            border: "none",
            borderRadius:'50%',
           
            
        },
        
    }
    

}))