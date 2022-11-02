
import {
    AnyAction,
    Dispatch
} from 'redux'



import { 
    action 
} from "../../utils/reduxHelpers";


export const SET_PORCESSES ='SET_PORCESSES'



const  getProcesses= ()=> async(dispatch:any,getState:any,{api}:any)=>{

        const {result,error} = await api.get('/process')
        
        if(error) console.log(error);
            else dispatch(action(SET_PORCESSES,result.data));
        
    }




export {
    getProcesses,
}