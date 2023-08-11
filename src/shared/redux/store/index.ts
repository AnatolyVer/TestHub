import {applyMiddleware, combineReducers, createStore} from "redux";

import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import { userReducer } from "./userReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user:userReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type State = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootWatcher)

