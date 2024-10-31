import { combineReducers, legacy_createStore } from 'redux'
import {dialogReducer} from './dialogReducer';
import {profileReducer} from './profileReducer';
import {sidebarReducer} from './sidebarReducer';
import {usersReducer} from './users-reduser';

const rootReducer = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store