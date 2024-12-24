import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../redax/redax-store';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA'

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

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
} as const)

// thunk
export const getAuthUser = () => async (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {

    let resporse = await authAPI.me()

    if (resporse.resultCode === 0) {
        let {id, email, login} = resporse.data
        dispatch(setAuthUserData(String(id), email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {

    let response = await authAPI.login(email, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(getAuthUser())
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Common error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logout = () => async (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {
    let response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export type ActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>






