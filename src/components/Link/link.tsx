import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'



import {
    Link as RouterDomLink,
    LinkProps as RouterDomLinkProps
} from 'react-router-dom';


interface ILinkProps {
    external?:string,
    href:string
}


type LinkProps = ILinkProps & RouterDomLinkProps

const Link:React.FC<LinkProps>=({
    external,
    children,
    ...rest

})=> {

    const {href,to,..._rest} = rest;
  return (
    external ? <a 
                    {...rest}>
                    {children}
               </a>  
             : 
            
            <RouterDomLink
                to={href}
                {..._rest}>
                    {children}
            </RouterDomLink> 
  )
}

export default Link