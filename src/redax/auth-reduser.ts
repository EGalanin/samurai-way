const SET_USER_DATA = 'SET_USER_DATA'

export type initialState = {
    users: null | string
    email: null | string
    login: null | string
    isFetching?: boolean
    isAuth: boolean
}

let initialState = {
    users: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: initialState = initialState, action: ActionsType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string ) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}} as const)

export type ActionsType = ReturnType<typeof setAuthUserData>






