import React, {useEffect, useState} from 'react';
import {UserType} from '../../redax/users-reduser';
import {Users} from '../../../src/componets/users/Users';
import {Preloader} from '../common/Preloader';


type Props = {
    isFetching: boolean
    currentPage: number
    pageSize: number
    totalCount: number
    users: UserType[];
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    toggleFollowingProgress: (isFollowing: boolean, userId: string) => void
    followingInProgress: string[]
    getUsers: (currentPage: number, pageSize: number) => void
};

export const UsersApiComponent: React.FC<Props> = ({
                                                       users,
                                                       totalCount,
                                                       isFetching,
                                                       currentPage,
                                                       pageSize,
                                                       follow,
                                                       unfollow,
                                                       followingInProgress,
                                                       toggleFollowingProgress,
                                                       getUsers
                                                   }) => {

    useEffect(() => {

        getUsers(currentPage, pageSize)

        // toggleIsFetching(true)
        //
        // usersAPI.getUsers(currentPage, pageSize)
        // // axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        // //     withCredentials: true
        // // })
        //     .then(data => {
        //         toggleIsFetching(false)
        //         setUsers(data.items);
        //         setTotalUsersCount(data.totalCount)
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, [currentPage, pageSize]);


    const onClickHandler = (el: number) => {

        getUsers(el, pageSize)
    }

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users
                users={users}
                totalCount={totalCount}
                currentPage={currentPage}
                follow={follow}
                pageSize={pageSize}
                unfollow={unfollow}
                onClickHandler={onClickHandler}
                followingInProgress={followingInProgress}
                toggleFollowingProgress={toggleFollowingProgress}
            />
        </>
    )
};



