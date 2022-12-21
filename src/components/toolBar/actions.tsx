import React from 'react'


import {
    Stack,
    styled,
} from '@mui/material';


import Link from '../Link/link';
import routesPath from '../../navigation/routing/routePaths';


import {ReactComponent as Setting} from '../../assets/icons/Setting.svg';
import {ReactComponent as Vector2} from '../../assets/icons/Vector2.svg';
import {ReactComponent as Vector3} from '../../assets/icons/Vector3.svg';
import {ReactComponent as Vector4} from '../../assets/icons/Vector4.svg';
import {ReactComponent as Vector5} from '../../assets/icons/Vector5.svg';

import LabelButton from '../IconButton/iconButton';

import IconButton from '../shared/iconButton/iconButton';

//test
import Menu from '../shared/Menu/menu';

import { 
  useHistory 
} from 'react-router-dom';


const ADD ='Add';


function Actions() {


  const {
    push,
    replace
  } = useHistory();

  return (
    <Container>
      <Menu
        open={true}
        >
        <IconButton>
              <Vector5
                />
        </IconButton>    
      </Menu>
        <IconButton>
            <Vector4
              />
        </IconButton>    
        <IconButton>
            <Vector3
              />
        </IconButton>    
        <IconButton>
            <Vector2
              />
        </IconButton>    
        <IconButton>
            <Setting
              />
        </IconButton>   

          <Link
            href={routesPath.DASHBOARD.CREATE_CONTRACT}
            to=''>
              <LabelButton
              onClick={()=>replace(routesPath.DASHBOARD.CREATE_CONTRACT)}
              color='primary'
              iconName='LeftAdd'
              size='medium'
              label={ADD}/> 
            </Link>
                
    </Container>
  )
}

export default Actions


const Container = styled(Stack)(({})=>({
    flexDirection:'row',
    gap:'28px',
    justifySelf:'flex-end'
}))