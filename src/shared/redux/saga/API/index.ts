import axios, {AxiosResponse} from "axios";


export const signIn = (data: any):Promise<AxiosResponse> =>{
    return axios.post(import.meta.env.VITE_API_URL, data, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
}