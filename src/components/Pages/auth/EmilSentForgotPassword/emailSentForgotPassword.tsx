import React,{
  useEffect
}  from 'react'

import { 
  useHistory 
} from 'react-router-dom';

import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'
import {ReactComponent as ConfirmationImage} from '../../../../assets/ConfirmationImage.svg';

import routesPath from '../../../../navigation/routing/routePaths';
//assets
import AuthBackground3 from '../../../../assets/backgrounds/authBackground31.jpg';
import {ReactComponent as Background} from '../../../../assets/backgrounds/authBackground1.svg';




function EmailSentForgotPassword() {



  const {push} = useHistory();

  useEffect(()=>{
    const timeOutID = setTimeout(()=>{
      push(routesPath.INSERT_NEW_PASSWORD);
  },5000)

    return ()=> clearTimeout(timeOutID);
    
  },[])

  return (
    <LoginLayout
        background={Background}
        formLayoutStyle={{
            flex:1
        }}>
        <TitleDesc/>
        <ConfirmationImage/>

        
    </LoginLayout>
  )
}

export default EmailSentForgotPassword