import { 
    SET_CONTRACTS,
    START_LOADING,
    STOP_LOADING
 } from './contract.actions'



//state 
const intialiState={
    loading:false,
    contracts:[]
}




function contractReducer(state=intialiState,action:any){

    const {type,payload} = action
    switch (type) {
        case SET_CONTRACTS : return {...state,contracts:[...payload]}
        case START_LOADING: return {...state,loading:true}
        case STOP_LOADING: return {...state,loading:false}   
    
        default: return state
    }

}


export default contractReducer