import React,{
    useContext
} from 'react';

import { 
    ModalContext
} from "../../components/shared/modal/modal";



function useModal(){
    return useContext(ModalContext);
}


export default useModal