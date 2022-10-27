import React from 'react'


import useBreadCurmbs from '../../../../utils/Customhooks/useBreadCrumbs'
import routesPath from '../../../../navigation/routing/routePaths';



import { 
  styled,
  Stack 
} from '@mui/material';

import TitleDesc from './titleDesc';
import ProcessList from './processList';

const PROCESS = 'Process'; 

function Process() {

    useBreadCurmbs({
        label:PROCESS,
        href:routesPath.DASHBOARD.PROCESSES,
        to:''
    })

  return (
    <Container
      >
        <TitleDesc/>
        <ProcessList/>
    </Container>
  )
}

export default Process



const Container = styled(Stack)(({theme})=>({
    position:'absolute',
    inset:'0',
    backgroundColor:theme.paletteColor.backgroundColor.default1,
    padding:'35px 20px'
}))