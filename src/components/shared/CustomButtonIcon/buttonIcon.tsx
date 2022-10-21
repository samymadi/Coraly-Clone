import React from 'react'


import {
    Button, 
    ButtonProps, 
    styled
} from '@mui/material';



interface CustomButton {

}

type CustomButtonIconProps = ButtonProps & CustomButton;





const ButtonIcon:React.FC<CustomButtonIconProps> = ({
  children,
  ...rest
})=> {
  return (
    <CustomButton
    variant='outlined'
    size='large'
    color="info"
    {...rest}
      >
        {/* {children} */}
        Type here
    </CustomButton>
  )
}

export default ButtonIcon



const CustomButton  = styled(({children,...props}:ButtonProps)=>(
    <Button
        {...props}>
            {children}
    </Button>
))(({theme})=>{

  const {
    actionSecondary,
    neutral,
    primary,
    secondary,
  } = theme.paletteColor

 



  return{
    fontSize:'14px',
    fontWeight:'700',
    textTransform:'unset',
    borderRadius:"8px",
    padding:'0 12px',
    lineHeight:'18px',
    boxShadow:'none',

    "&:hover":{
      boxShadow:'none',
    },

    "&:active":{
      boxShadow:'none'
    },
    
    
    "&.MuiButton-outlined":{
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
    "&.MuiButton-contained":{
        color:'white'
    },

    "&.MuiButton-sizeLarge":{
      height:'40px',
    },
    "&.MuiButton-sizeMedium":{
      height:'32px',
    },



    //differents color

    //primary color
    "&.MuiButton-containedPrimary":{
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
    "&.MuiButton-containedSecondary":{
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
    "&.MuiButton-containedInfo":{
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