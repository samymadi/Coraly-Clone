import React from 'react'


import Typography from '../typography/typography'


import { 
    Alert as MuiAlert, 
    AlertProps, 
    styled, 
    SxProps,
    Theme
} from '@mui/material'



import {ReactComponent as CloseIcon} from '../../../assets/icons/Close.svg';
import {ReactComponent as ApproveIcon} from '../../../assets/icons/Approve.svg';
import IconButton from '../iconButton/iconButton';



interface IAlert{
    label?:string
    typoStyle?:SxProps<Theme>
}


function CoralyAlert({
    label,
    typoStyle,
    onClose,
    ...rest
}:AlertProps & IAlert) {
  return (
    <CustomAlert
        onClose={onClose}
        action={<IconButton
                    onClick={onClose}>
                    <CloseIcon
                        style={{
                            position:'relative',
                            top:'-2px',
                            height:'18px',
                            width:'18px',
                        }}/>
                </IconButton>
                }
        iconMapping={{
                success:<ApproveIcon/>
        }}
        {...rest}>
            
            <Typography
                sx={typoStyle}>
                 {label}   
            </Typography>
    </CustomAlert>
  )
}

export default CoralyAlert



const CustomAlert =styled(MuiAlert)(({theme})=>({
    alignItems:'center',
    borderRadius:'8px',
    padding:'8px 16px',
    boxShadow:'0 0 4px lightgray',

    "& p":{
        fontWeight:'600',
        fontSize:'16px',
        lineHeight:'24px',
    },

    "& svg":{
        width:'22px',
        height:'22px'
    },
    "&.MuiAlert-standardSuccess":{
        backgroundColor:theme.paletteColor.states.successBg,
        "& p":{
            color:theme.paletteColor.states.success,
        },
        "& svg":{
            fill:theme.paletteColor.states.success,

        }
    },
    "&.MuiAlert-standardWarning":{
        backgroundColor:theme.paletteColor.states.warningBg,
        "& p":{
            color:theme.paletteColor.states.warning,
        },
        "& svg":{
            fill:theme.paletteColor.states.warning,

        }
    },
    "&.MuiAlert-standardError":{
        backgroundColor:theme.paletteColor.states.errorBg,
        "& p":{
            color:theme.paletteColor.states.error,
        },
        "& svg":{
            fill:theme.paletteColor.states.error,

        }
    }
    
}))
