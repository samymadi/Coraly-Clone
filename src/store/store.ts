import { 
    createStore,
    combineReducers,
    applyMiddleware,
    Store,
    
} from "redux";


import 'redux-devtools-extension';


//thunk middleware

import thunk from "redux-thunk";
import api from "../utils/api";



//reducers
import processReducer from "./processes/processes.reducer";
import contractReducer from './contract/contract.reducer'



const reducers ={
    process:processReducer,
    contract:contractReducer
}




const store:Store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk.withExtraArgument({
        api:api()
    }))
);



export default store