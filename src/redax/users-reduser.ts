import baseFoto from '../assets/images/1avatara_ru_3D019.jpg'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UsersReducerType = {
    users: UserType[]
}

export type UserType = {
    id: string
    name: string
    uniqueUrlName: null
    photos: PhotoType
    followed: boolean
    status: string
}

type PhotoType = {
    small: null
    large: null
}

const initialState: UsersReducerType = {
    users: []
}

export const usersReducer = (state: UsersReducerType = initialState, action: ActionsType): UsersReducerType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, unfollowed: false} : u)
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
                // users: [...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string) => (
    {
        type: FOLLOW,
        userId
    } as const
)

export const unfollowAC = (userId: string) => (
    {
        type: UNFOLLOW,
        userId
    } as const
)

export const setUsersAC = (users: UserType[]) => (
    {
        type: SET_USERS,
        users
    } as const
)

export type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>






