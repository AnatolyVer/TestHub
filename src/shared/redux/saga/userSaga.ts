import {takeLatest} from 'redux-saga/effects';
import {Actions} from '../action-types'

import * as Effects from "redux-saga/effects";
import {
    signIn,
} from "./API/index.ts";

import IAction from "@shared/Interfaces/IAction.ts";

const call: any = Effects.call;

function* SignInWorker(action: IAction){
    try {
        const {data} = yield call(signIn, action.payload);
        console.log(data)
    }catch (error) {
        console.error(error)
    }
}

export default function* userWatcher() {
    yield takeLatest(Actions.LOG_USER_API, SignInWorker)

}
