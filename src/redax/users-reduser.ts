import baseFoto from '../assets/images/1avatara_ru_3D019.jpg'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UsersReducerType = {
    users: UserType[],
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
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
    currentPage: 2,
    isFetching: false
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
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
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
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId: string) => (
    {
        type: FOLLOW,
        userId
    } as const
)

export const unfollow = (userId: string) => (
    {
        type: UNFOLLOW,
        userId
    } as const
)

export const setUsers = (users: UserType[]) => (
    {
        type: SET_USERS,
        users
    } as const
)

export const setCurrentPage = (currentPage: number) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
)

export const setTotalUsersCount = (totalUsersCount: number) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
)

export const toggleIsFetching = (isFetching: boolean) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
)

export type ActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>






