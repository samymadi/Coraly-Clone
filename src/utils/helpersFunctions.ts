import { 
    Text 
} from "../_types/basicType";

const stringAvatar = (name: Text)=> {
    if(typeof name !='string') return 'AA';
        return`${name.split(' ')[0][0]}${name.split(' ')[1][0]}`.toUpperCase();
};




export {
    stringAvatar
}  