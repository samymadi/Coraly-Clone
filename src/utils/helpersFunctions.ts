import { 
    Text 
} from "../_types/basicType";

const stringAvatar = (name: Text)=> {
    if(typeof name !='string') return 'AA';
        return`${name.split(' ')[0][0]}${name.split(' ')[1][0]}`.toUpperCase();
};



const getSeachParams = (search:string)=>{
        return {
            name:search.slice(search.indexOf('?')+1,search.indexOf("=")),
            value:search.slice(search.indexOf('=')+1)
        }
}




export {
    stringAvatar,
    getSeachParams
}  