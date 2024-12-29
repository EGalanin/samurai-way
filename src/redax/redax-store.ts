import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {authReducer} from 'src/redax/auth-reduser';
import {appReducer} from 'src/redax/app-reduser';
import {usersReducer} from 'src/redax/users-reduser';
import {dialogReducer} from 'src/redax/dialogReducer';
import {profileReducer} from 'src/redax/profileReducer';
import {sidebarReducer} from 'src/redax/sidebarReducer';

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
