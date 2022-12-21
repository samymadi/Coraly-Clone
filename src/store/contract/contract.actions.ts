import { 
    action 
} from "../../utils/reduxHelpers";


export const SET_CONTRACTS ='SET_CONTRACTS'
export const START_LOADING='START_LOADING'
export const STOP_LOADING='STOP_LOADING'



const  getContracts= ()=> async(dispatch:any,getState:any,{api}:any)=>{

        
        dispatch(action(START_LOADING))
        const {result,error} = await api.get('/contract')
        if(error) console.log(error);
            else dispatch(action(SET_CONTRACTS,result.data));
        
        dispatch(action(STOP_LOADING)) 
        
    }




export {
    getContracts,
}