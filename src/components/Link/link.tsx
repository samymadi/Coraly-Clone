import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'



import {
    Link as RouterDomLink,
    LinkProps as RouterDomLinkProps
} from 'react-router-dom';


interface ILinkProps {
    external?:string,
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
                    {...rest}>
                    {children}
               </a>  
             : 
            
            <RouterDomLink
                style={{textDecoration:'none'}}
                to={href}
                {..._rest}>
                    {children}
            </RouterDomLink> 
  )
}

export default Link