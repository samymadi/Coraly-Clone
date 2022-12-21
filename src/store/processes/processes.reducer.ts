import {
    Action,
    
} from 'redux'


import { 
    SET_PORCESSES
 } from './processes.actions';



//state 
const intialiState={
    processes:[]
}




function processReducer(state=intialiState,action:any){

    const {type,payload} = action
    
    switch (action.type) {

        case SET_PORCESSES :  //do something
            return {...state,processes:[...action.payload]}
    
        default: return state
    }

}


export default processReducer