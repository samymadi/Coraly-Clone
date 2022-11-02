import React, { 
    useState
 } from 'react'



import Select from '../../select/select';
import {
    useTheme
} from '@mui/material'; 


import {ReactComponent as Standard} from '../../../assets/icons/Standard.svg';


const CHOOSE_CHAPTER = 'Choose chapter';
const CHAPTER_1 = 'Chapter One';
const CHOOSE_2 = 'Choose Two';


function ChapterSelect() {

    const [state,setState] =useState<string>(()=>CHOOSE_CHAPTER);
    const {
        default:_default
    } = useTheme().paletteColor.primary
  return (
    <Select
        leftIcon={<Standard
                    style={{
                        fill:_default
                    }}/>}
        value={state}
        setValue={setState}
        open={true}/>
        
  )
}

export default ChapterSelect