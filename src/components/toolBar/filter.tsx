import React,{
    useState,
} from 'react'


import {
    styled,
    Stack,
    useTheme,
} from '@mui/material';


import ChipCheckbox from '../ChipCheckbox/chipCheckbox';

//assets
import {ReactComponent as Vector6} from '../../assets/icons/Vector6.svg';
import {ReactComponent as Vector7} from '../../assets/icons/Vector7.svg';
import {ReactComponent as Vector8} from '../../assets/icons/Vector8.svg';
import {ReactComponent as Vector9} from '../../assets/icons/Vector9.svg';
import {ReactComponent as ColorPalette} from '../../assets/icons/color_palette.svg';
import {ReactComponent as VerticalResize} from '../../assets/icons/vertical_resize.svg';



const COLUMNS='Columns';
const FILTERS='Filters';
const GROUPED='Grouped';
const PHASES='Phases';
const ORDERS='Orders';
const COLOR='Color';
const HEIGHT='Height';
const AVERAGE='Average'


function Filter() {



    const [state,setState] = useState<boolean>(false);
    const [state1,setState1] = useState<boolean>(false);
    const [state2,setState2] = useState<boolean>(false);
    const [state3,setState3] = useState<boolean>(false);
    const [state4,setState4] = useState<boolean>(false);
    const [state5,setState5] = useState<boolean>(false);

    const {
        accent
      } = useTheme().paletteColor;
  
  return (
    <Container>
        <ChipCheckbox
            ChecboxIcon={Vector9}
            label={COLUMNS}
            actifColor={accent.neaoGreen}
            value={state}
            setValue={setState}/>
        <ChipCheckbox
            ChecboxIcon={Vector8}
            label={FILTERS}
            actifColor={accent.orange}
            value={state1}
            setValue={setState1}/>
        <ChipCheckbox
            ChecboxIcon={Vector7}
            label={GROUPED}
            actifColor={accent.purple}
            postLabel={PHASES}
            value={state2}
            setValue={setState2}/>
        <ChipCheckbox
            ChecboxIcon={Vector6}
            label={ORDERS}
            actifColor={accent.magenta}
            value={state3}
            setValue={setState3}/>
        <ChipCheckbox
            ChecboxIcon={ColorPalette}
            label={COLOR}
            actifColor={accent.sky}
            value={state4}
            setValue={setState4}/>
        <ChipCheckbox
            ChecboxIcon={VerticalResize}
            label={HEIGHT}
            actifColor={accent.yellow}
            postLabel={AVERAGE}
            value={state5}
            setValue={setState5}/>
    </Container>
  )
}

export default Filter



const Container = styled(Stack)(({})=>({
    flexDirection:'row',
    alignItems:'center',
    gap:'25px',
    "&::-webkit-scrollbar":{
            display:'none',
    }
    
}))