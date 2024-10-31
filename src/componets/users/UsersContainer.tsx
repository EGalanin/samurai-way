import * as React from 'react';
import {Users} from '../../../src/componets/users/Users';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootState} from '../../../src/redax/redax-store';
import {followAC, setUsersAC, unfollowAC, UserType,} from '../../redax/users-reduser';


type MapStatePropsType = {
    users: UserType[]
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.usersPage?.users || []
    }
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
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
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Users)