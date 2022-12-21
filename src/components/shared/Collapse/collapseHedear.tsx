import React, { useMemo } from 'react'

import {ReactComponent as DownArrow } from '../../../assets/icons/down_arrow.svg';
import {ReactComponent as UpperArrow } from '../../../assets/icons/upper_arrow.svg';

import {
    styled,
    Stack,
    StackProps,
    IconButton
} from '@mui/material';


interface ICollapseHeaderProps{
    leftDropDown?:boolean,
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}


export type CollapseHedearProps = ICollapseHeaderProps & StackProps

const CollapseHedear:React.FC<CollapseHedearProps> = ({
    children,
    open,
    leftDropDown,
    setOpen,
    ...rest
})=> {


    const handleOpenCollapse  =()=>{
        setOpen(true);
    }
    const handleCloseCollapse  =()=>{
        setOpen(false);
    }

    const arrow = useMemo(()=> {
            if(open) 
            return   (<CustomIconButton
                            onClick={handleCloseCollapse}>
                            <UpperArrow
                                /> 
                        </CustomIconButton>)
            return( 
                        <CustomIconButton
                            onClick={handleOpenCollapse}>
                            <DownArrow/> 
                        </CustomIconButton>
                    )
        } ,[open])

  return (
    
    <HeaderContainer    
            {...rest}>
        {leftDropDown && arrow}    
        {children}
        {!leftDropDown && arrow}
    </HeaderContainer>
  )
}

export default CollapseHedear




const HeaderContainer = styled(Stack)(({})=>({
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding :"12px 12px" 

}))


const CustomIconButton  = styled(IconButton)(({theme})=>({
    padding:'0',
    "& svg":{
        fill:theme.paletteColor.neutral['50'],
        width:'20px',
        height:'20px'
    }
}))