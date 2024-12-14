import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../redax/redax-store';
import {getAuthUser} from '../../src/redax/auth-reduser';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type initialState = {
    initialized: boolean
}

const initialState = {
    initialized: false,
}


export const appReducer = (state: initialState = initialState, action: ActionsType) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
} as const)

// thunk
export const initializeApp = () => (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {
    let promise = dispatch(getAuthUser())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export type ActionsType = ReturnType<typeof initializedSuccess>






