import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {dialogReducer} from './dialogReducer';
import {profileReducer} from './profileReducer';
import {sidebarReducer} from './sidebarReducer';
import {usersReducer} from './users-reduser';
import {authReducer} from './auth-reduser';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {appReducer} from '../redax/app-reduser';


const rootReducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

// export const store = legacy_createStore(rootReducers, {},applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
//
// // @ts-ignore
// window.store = store
