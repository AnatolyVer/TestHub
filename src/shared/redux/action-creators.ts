import {Actions} from './action-types'
import {NavigateFunction} from "react-router-dom";


export const logUser = (data: {email:string, password:string}, nav:NavigateFunction)  => {
    return{
        type: Actions.LOG_USER_API,
        payload: data,
        nav
    }
}
