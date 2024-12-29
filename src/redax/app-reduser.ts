import {ThunkDispatch} from 'redux-thunk';
import {getAuthUser} from 'src/redax/auth-reduser';
import {RootState} from 'src/redax/redax-store';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false,
}


export const appReducer = (state = initialState, action: ActionsType): initialStateType => {

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






