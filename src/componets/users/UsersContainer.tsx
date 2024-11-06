import * as React from 'react';
import {UsersApiComponent} from '../../../src/componets/users/UsersApiComponent';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootState} from '../../../src/redax/redax-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType,
} from '../../redax/users-reduser';


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.usersPage?.users || [],
        pageSize: state.usersPage?.pageSize,
        totalCount: state.usersPage?.totalCount,
        currentPage: state.usersPage?.currentPage
    }
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUlersCount: number) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch((setCurrentPageAC(currentPage)))
        },
        setTotalUsersCount: (totalUlersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUlersCount))
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)