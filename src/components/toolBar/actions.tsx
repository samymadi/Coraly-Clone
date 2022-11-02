import React, { useState } from 'react'


import {
    Stack,
    styled,
    IconButton as MuiIconButton,
    useTheme
} from '@mui/material';


import {ReactComponent as Setting} from '../../assets/icons/Setting.svg';
import {ReactComponent as Vector2} from '../../assets/icons/Vector2.svg';
import {ReactComponent as Vector3} from '../../assets/icons/Vector3.svg';
import {ReactComponent as Vector4} from '../../assets/icons/Vector4.svg';
import {ReactComponent as Vector5} from '../../assets/icons/Vector5.svg';

import IconButton from '../IconButton/iconButton';

//test
import Menu from '../shared/Menu/menu';


const ADD ='Add';


function Actions() {

  const {
    neutral
  } =useTheme().paletteColor;



  return (
    <Container>
      <Menu
        open={true}
        >
        <MuiIconButton>
              <Vector5
                fill={neutral['60']}
                />
        </MuiIconButton>    
      </Menu>
        <MuiIconButton>
            <Vector4
              fill={neutral['60']}
              />
        </MuiIconButton>    
        <MuiIconButton>
            <Vector3
              fill={neutral['60']}
              />
        </MuiIconButton>    
        <MuiIconButton>
            <Vector2
              fill={neutral['60']}
              />
        </MuiIconButton>    
        <MuiIconButton>
            <Setting
              fill={neutral['60']}
              />
        </MuiIconButton>   

        <IconButton
            color='primary'
            iconName='LeftAdd'
            size='medium'
            label={ADD}/> 
                
    </Container>
  )
}

export default Actions


const Container = styled(Stack)(({})=>({
    flexDirection:'row',
    gap:'28px',
    justifySelf:'flex-end'
}))