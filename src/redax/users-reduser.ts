import {Dispatch} from 'redux';
import {usersAPI} from 'src/api/api';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UsersReducerType = {
    users: UserType[],
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
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
    isFetching: false,
    followingInProgress: []
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
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
// Action Creaters
export const acceptFollow = (userId: string) => (
    {
        type: FOLLOW,
        userId
    } as const
)

export const acceptUnfollow = (userId: string) => (
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

export const toggleFollowingProgress = (isFollowing: boolean, userId: string) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFollowing,
        userId
    } as const
)

//Thunk
//getUsersThunkCreator
export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false))
    }
}

export const follow = (userId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.follow(userId)

        if (response.resultCode === 0) {
            dispatch(acceptFollow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.unfollow(userId)

        if (response.resultCode === 0) {
            dispatch(acceptUnfollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export type ActionsType = ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>






