import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {dialogReducer} from './dialogReducer';
import {profileReducer} from './profileReducer';
import {sidebarReducer} from './sidebarReducer';
import {usersReducer} from './users-reduser';
import {authReducer} from '../../src/redax/auth-reduser';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import {appReducer} from '../redax/app-reduser';


const rootReducer = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export const store = legacy_createStore(rootReducer, {},applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store