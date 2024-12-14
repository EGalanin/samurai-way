import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../redax/redax-store';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA'

export type initialState = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: initialState = initialState, action: ActionsType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean ) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}} as const)

// thunk
export const getAuthUser = () => (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {

    return authAPI.me()
        .then(res => {
            if (res.resultCode === 0) {
                let {id, email, login} = res.data
                dispatch(setAuthUserData(String(id), email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {

    authAPI.login(email, password, rememberMe)
        .then(res => {
            // console.log(res)
            if (res.resultCode === 0) {
                dispatch(getAuthUser())
            } else {
                let message = res.messages.length > 0 ? res.messages[0] : "Common error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false ))
            }
        })
}

export type ActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>






