import {UsersApiComponent} from '../../../src/componets/users/UsersApiComponent';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {follow, getUsers, toggleFollowingProgress, unfollow, UserType,} from '../../redax/users-reduser';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.usersPage?.users || [],
        pageSize: state.usersPage?.pageSize,
        totalCount: state.usersPage?.totalCount,
        currentPage: state.usersPage?.currentPage,
        isFetching: state.usersPage?.isFetching,
        followingInProgress: state.usersPage?.followingInProgress
    }
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFollowing: boolean, userId: string) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        toggleFollowingProgress,
        getUsers
    })
)(UsersApiComponent)