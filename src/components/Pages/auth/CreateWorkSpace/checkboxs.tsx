import React, { 
    useMemo, useState 
} from 'react'


import { 
    Stack, useTheme 
} from '@mui/material'


import CheckBoxLabel from '../../../shared/checkBoxLabel/checkBoxLabel'
import CheckboxInput from '../../../shared/checkBoxLabel/checkboxInput'
import Typography from '../../../shared/typography/typography'
import TextRedirection from '../../../textRedirection/textRedirection'


const AUTHORIZATION_LABEL='I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail.'
const AGREE_WITH='Agree with'
const AND = 'and'
const TERM_AND_CONDITIONS ='Terms and Conditions'
const PRIVACY_POLICY='Privacy Policy';
const COOKIE_POLICY ='Cookie Policy'

//Agree with Terms and Conditions, Privacy Policy and Cookie Policy

function Checkboxs() {


    const {paletteColor} = useTheme()

    const [checbox1,setChckbox1] = useState<boolean>(false);
    const [checbox2,setChckbox2] = useState<boolean>(false);
    
    
    const conditionLabel = useMemo(()=>(
        <Stack
            direction='row'
            flexWrap='wrap'
            alignItems='center'>
                <Typography
                    sx={{
                            fontSize:'14px',
                            color:paletteColor.neutral['100']}}>
                    {AGREE_WITH}&nbsp;
                </Typography>
                <TextRedirection
                    href='somewhere'
                    to='somewhere'
                    label={TERM_AND_CONDITIONS}/>
                <Typography
                    sx={{
                        fontSize:'14px',
                        color:paletteColor.neutral['100']}}>
                    ,&nbsp;
                </Typography>
                <TextRedirection
                    href='somewhere'
                    to='somewhere'
                    label={PRIVACY_POLICY}/>
                <Typography
                    sx={{
                        fontSize:'14px',
                        color:paletteColor.neutral['100']}}>
                    &nbsp;{AND}
                </Typography>
                <TextRedirection
                        href='somewhere'
                        to='somewhere'
                        label={COOKIE_POLICY}/>
                  
        </Stack>
    ),[])


    const authorizationLabel  = useMemo(()=>(
        <Typography
        fontSize='14px'>
                {AUTHORIZATION_LABEL}
        </Typography>
    ),[])
  return (

    <Stack>
            <CheckBoxLabel
                label={conditionLabel}
                sx={{marginBottom:'20px',
                   
                }}
                control={<CheckboxInput
                                setValue={setChckbox1}/>
                    }/>
            <CheckBoxLabel
                label={authorizationLabel}
                control={<CheckboxInput
                                setValue={setChckbox2}/>
                }/>    
                
    </Stack>
  )
}

export default Checkboxs