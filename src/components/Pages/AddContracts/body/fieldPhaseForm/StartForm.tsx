import React from 'react'

import FormCollapse from '../../../../formCollapse/formCollapse'

//assets
import {ReactComponent as Start } from '../../../../../assets/icons/Start.svg';
import Container from './Container';

const START ='Start'

function StartForm() {
  return (
    <FormCollapse
        icon={<Start/>}
        label={START}>
        <Container>
            
        </Container>
        
    </FormCollapse>
  )
}

export default StartForm