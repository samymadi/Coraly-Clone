import React, { 
    useState
 } from 'react'



import Select from '../../select/select';
import {
    useTheme
} from '@mui/material'; 


import {ReactComponent as Account} from '../../../assets/icons/account.svg';


const SELECT_VENDORS = 'Select vendors';
const VENDORS_1 = 'Samy Madi';
const VENDORS_2 = 'Justin Biber';


function VendorSelect() {

    const [state,setState] =useState<string>(SELECT_VENDORS);
  return (
    <Select
        leftIcon={<Account/>}
        value={state}
        setValue={setState}
        open={true}/>
        
  )
}

export default VendorSelect