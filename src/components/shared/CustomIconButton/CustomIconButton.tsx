import React from 'react'



import {
    IconButton,
    IconButtonProps,
} from '@mui/material';


import {
    styled
} from '@mui/material/styles';



interface ICustomIconButton {

}


export type CustomIconButtonProps  =  ICustomIconButton & IconButtonProps

const  CustomIconButton:React.FC<CustomIconButtonProps> =({
    children,
    ...rest
})=> {
  return (
    <StyledCustomIconButton
            color='secondary'
            // variant='contained'
            {...rest}>
        {children}
    </StyledCustomIconButton>
  )
}

export default CustomIconButton




const StyledCustomIconButton = styled(({children,...rest}:IconButtonProps)=>(
        
        <IconButton
            
                {...rest}>
            {children}
        </IconButton>

))(({theme})=>{
    
    const {
        actionSecondary,
        neutral,
        primary,
        secondary,
      } = theme.paletteColor
    
     
    
    
    
      return{
        //generic
        fontSize:'14px',
        fontWeight:'700',
        textTransform:'unset',
        borderRadius:"8px",
        lineHeight:'18px',
        boxShadow:'none',
    
        "&:hover":{
          boxShadow:'none',
        },
    
        "&:active":{
          boxShadow:'none'
        },
        "& svg":{
            color:'white',
        },
        
        
        "&.MuiIconButton-outlined":{
          backgroundColor:'white',
          color:actionSecondary.default,
          border:`1px solid ${actionSecondary.default}`,
    
    
          "&:hover":{
            backgroundColor:neutral['10'],
          },
    
          "&:active":{
            backgroundColor:neutral['20'],
            
          },
    
             //disabled style
          "&.Mui-disabled":{
              color:neutral['50'],
              backgroundColor:neutral['10'],
              border:'none',
              opacity:'0.5'
          }
          
        },
        "&.MuiIconButton-contained":{
            color:'white'
        },
    
        "&.MuiIconButton-sizeLarge":{
          height:'40px',
          widht:'40px'
        },
        "&.MuiIconButton-sizeMedium":{
          height:'36px',
          width:'36px',
        },
    
    
    
        //differents color
    
        //primary color
        "&.MuiIconButton-colorPrimary":{
            backgroundColor:primary.default,
            "&:hover":{
              backgroundColor:primary.hover
            },
            "&:active":{
              backgroundColor:primary.active
            },
            "&.Mui-disabled":{
              backgroundColor:primary.disabled
            }
        },
    
        //secondary color
        "&.MuiIconButton-colorSecondary":{
          backgroundColor:secondary.default,
          "&:hover":{
            backgroundColor:secondary.hover
          },
          "&:active":{
            backgroundColor:secondary.active
          },
          "&.Mui-disabled":{
            backgroundColor:secondary.disabled
          }
        }, 
        
        // 3rd color info color
        "&.MuiIconButton-colorInfo":{
          backgroundColor:actionSecondary.default,
          "&:hover":{
            backgroundColor:neutral['90'],
          },
          "&:active":{
            backgroundColor:neutral['100'],
          },
          "&.Mui-disabled":{
            backgroundColor:""
          }
        },
    
       
        
    
      
    }
})