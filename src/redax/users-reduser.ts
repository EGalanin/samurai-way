import baseFoto from '../assets/images/1avatara_ru_3D019.jpg'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type UsersReducerType = {
    users: UserType[],
    pageSize: number
    totalCount: number
    currentPage: number
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
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 2
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
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalCount: action.totalUsersCount
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

export const setCurrentPageAC = (currentPage: number) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
)

export const setTotalUsersCountAC = (totalUsersCount: number) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
)

export type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>






