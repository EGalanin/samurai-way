import { combineReducers, legacy_createStore } from 'redux'
import {dialogReducer} from './dialogReducer';
import {profileReducer} from './profileReducer';
import {sidebarReducer} from './sidebarReducer';

const rootReducer = combineReducers({
    profilePage: dialogReducer,
    dialogsPage: profileReducer,
    sidebar: sidebarReducer
})

export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>