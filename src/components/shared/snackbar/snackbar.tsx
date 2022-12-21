import React,{
    useEffect,
    useState
} from 'react'


import { 
    Snackbar as MuiSnakbar, 
    SnackbarProps, 
    styled,
} from '@mui/material'

import CoralyAlert from '../alert/alert';
import { Text } from '../../../_types/basicType';



interface ISnackBar{
    message?:string
    setMessage:React.Dispatch<React.SetStateAction<string>>
}

function Snackbar({
    message,
    setMessage,
    ...rest
}:SnackbarProps & ISnackBar) {


    const [open,setOpen] = useState<boolean>(false);


    useEffect(()=>{
        if(message) setOpen(true);
    },[message])

    const onClose =()=>{
        setOpen(false);
        // setTimeout(()=>{
        //     setMessage('');
        // },0)
    }

    
  
    return (
    <CoralySnackbar
        open={open}
        onClose={onClose}
        {...rest}>
            {/* without div tag the app trigger an error */}
            <div>
                <CoralyAlert 
                    onClose={onClose}
                    label={message}/>
            </div>

               
    </CoralySnackbar>
        )
}

export default Snackbar



const CoralySnackbar =styled(MuiSnakbar)(({})=>({
    
}))