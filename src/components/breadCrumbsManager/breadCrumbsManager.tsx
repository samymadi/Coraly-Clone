import React, {
     useState,
     createContext
} from 'react'

import { 
    BreadcrumbsItemProps 
} from '../AppBar/breadcrumbsItems';



interface IBreadCrumbContext{
    breadCrumbsArray?:BreadcrumbsItemProps[],
    setBreadCrumbsArray?:React.Dispatch<React.SetStateAction<BreadcrumbsItemProps[]>>
}

export const BreadCrumbContext = createContext<IBreadCrumbContext>({});

function BreadCrumbsManager({
    children
}:{children:React.ReactNode}) {


    const [breadCrumbsArray,setBreadCrumbsArray] =  useState<BreadcrumbsItemProps[]>([]);
    
  return (
    <BreadCrumbContext.Provider 
            value={{
                breadCrumbsArray,
                setBreadCrumbsArray
            }}>
                {children}
    </BreadCrumbContext.Provider>
  )
}

export default BreadCrumbsManager