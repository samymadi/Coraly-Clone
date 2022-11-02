import axios from "axios"
import { env } from "process"

console.log(process.env.REACT_BASE_URL)


type AxiosPromise = {
    result?:any,
    error?:Error,
}


const axiosConfig ={
    baseURL:process.env.REACT_BASE_URL || 'http://localhost:5000/api/v1',
    headers:{
        'Authorization': `Bearer ${process.env.REACT_TOKEN}`
    }
}

const api = ()=>{
   const _axios =  axios.create(axiosConfig);
   return {
        get:catchAsync(_axios.get),
        post:catchAsync(_axios.post)
   }

}



const  catchAsync =(fun:any)=> async(...params:any):Promise<AxiosPromise>=>{
    try {
        const result = await fun(...params);
        return {
            result,
        }
    } catch (error:any) {
        return {
            error
        }
    }
}

export default api



