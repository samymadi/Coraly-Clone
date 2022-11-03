import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'



import {
    Link as RouterDomLink,
    LinkProps as RouterDomLinkProps
} from 'react-router-dom';


interface ILinkProps {
    external?:boolean,
    href:string
}


export type LinkProps = ILinkProps & RouterDomLinkProps

const Link:React.FC<LinkProps>=({
    external,
    children,
    ...rest

})=> {

    const {href,to,..._rest} = rest;
  return (
    external ? <a    
                    style={{textDecoration:'none'}}
                    {...rest}
                    data-testid='a_tag'>
                    {children}
               </a>  
             : 
            
            <RouterDomLink
                 
                style={{textDecoration:'none'}}
                to={href}
                {..._rest}
                data-testid='link_tag'>
                    {children}
            </RouterDomLink> 
  )
}

export default Link