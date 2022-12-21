import React,{
    memo,
    useEffect
} from 'react'

import { 
  useHistory 
} from 'react-router-dom';

import LoginLayout from '../../../shared/loginLayout/loginLayout'
import TitleDesc from './titleDesc'

import AuthBackground2 from '../../../../assets/backgrounds/authBackground22.jpg';
import {ReactComponent as ConfirmationImage} from '../../../../assets/ConfirmationImage.svg';
import {ReactComponent as Background} from '../../../../assets/backgrounds/authBackground2.svg';
import routesPath from '../../../../navigation/routing/routePaths';


function ConfirmationEmailWorkSpace() {

  const {push} = useHistory();

  useEffect(()=>{
    const timeOutID =  setTimeout(()=>{
        push(routesPath.COMPLETE_PROFILE);
    },5000)

    return ()=> clearTimeout(timeOutID);
  },[])
  return (
    <LoginLayout
        background={Background}
        formLayoutStyle={{
          flex:1
        }}
        backgroundWrapperStyle={{
          flex:0.65
        }}>
          <TitleDesc
          />
          <ConfirmationImage/>
    </LoginLayout>
  )
}

export default memo(ConfirmationEmailWorkSpace)