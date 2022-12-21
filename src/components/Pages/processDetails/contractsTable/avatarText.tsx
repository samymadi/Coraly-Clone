import React from 'react'


import {
  Stack,
  StackProps,
  styled
} from '@mui/material';

//types
import { 
  Text 
} from '../../../../_types/basicType';


import TypoCell from './TypoCell';
import AvatarNameAbstractionStyle2 from '../../../AvatarNameAbstraction/AvatarNameAbstractionStyle2';


interface IAvatarTextProps {
  text:Text
}



export type AvatarTextProps =  IAvatarTextProps & StackProps



function AvatarText({
  text,
  ...rest
}:AvatarTextProps) {

  return (
    <Container
      {...rest}
      >
      <AvatarNameAbstractionStyle2
          label={text}/>
        <TypoCell>
          {text}
        </TypoCell>
      </Container>
  )
}

export default AvatarText



const Container  =styled(Stack)(({})=>({
    flexDirection:'row',
    alignItems:'center',
    gap:'8px',
    width:'180px'
})) 



