import * as React from 'react';
import {UsersApiComponent} from '../../../src/componets/users/UsersApiComponent';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType,
} from '../../redax/users-reduser';


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.usersPage?.users || [],
        pageSize: state.usersPage?.pageSize,
        totalCount: state.usersPage?.totalCount,
        currentPage: state.usersPage?.currentPage,
        isFetching: state.usersPage?.isFetching
    }
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: string) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch((setCurrentPage(currentPage)))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCount(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export default  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersApiComponent)