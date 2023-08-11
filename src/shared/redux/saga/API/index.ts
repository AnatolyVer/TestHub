import axios, {AxiosResponse} from "axios";

const API_URL = "http://localhost:8080/auth/login";

export const signIn = (data: any):Promise<AxiosResponse> =>{
    return axios.post(API_URL, data, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
}