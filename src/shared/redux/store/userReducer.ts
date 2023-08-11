import IAction from "../../../../../social_network/src/interfaces/IAction";
import {IProfileInfo} from "../../../../../social_network/src/shared/TypesAndInterfaces/IProfileInfo";

const defaultUser : IProfileInfo | null  = null

export const userReducer = (state = defaultUser, action: IAction) => {
    switch (action.type){
        /*case Actions.SET_CURRENT_PROFILE:
            return action.payload
        case Actions.CLEAR_CURRENT_PROFILE:
            return defaultUser*/
        default:
            return state
    }
}
