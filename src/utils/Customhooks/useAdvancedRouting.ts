import {
    useLocation,
    useHistory,
} from 'react-router-dom';

function useAdvancedRouting(){


    const {
        search,
      } = useLocation()
    
    const {
        replace
    } = useHistory();



    const removeResearchParams=(param:string)=>{

        const queryParams  = new URLSearchParams(search);
        if (queryParams.has(param)) {
            queryParams.delete(param)
            replace({
              search: queryParams.toString(),
            })
          }
    }  


    return {
        removeResearchParams,
    }
}

export default useAdvancedRouting