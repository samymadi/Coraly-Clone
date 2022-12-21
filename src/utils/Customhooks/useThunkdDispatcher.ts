import { 
    useDispatch
} from "react-redux";

import { 
    AnyAction 
} from "redux";

import { 
    ThunkDispatch 
} from "redux-thunk";



export type DipatcherTunkType = ThunkDispatch<any,any,AnyAction>

function useThunkdDispatcher(){
    return useDispatch<DipatcherTunkType>();
}



export default useThunkdDispatcher