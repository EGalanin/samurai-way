import React, {useEffect, useState} from 'react';
import {UserType} from '../../redax/users-reduser';
import {Users} from '../../../src/componets/users/Users';
import {Preloader} from '../common/Preloader';
import {usersAPI} from '../../../src/api/api';


type Props = {
    isFetching: boolean
    currentPage: number
    pageSize: number
    totalCount: number
    users: UserType[];
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
};



export const UsersApiComponent: React.FC<Props> = ({
                                                       users,
                                                       totalCount,
                                                       isFetching,
                                                       currentPage,
                                                       pageSize,
                                                       follow,
                                                       unfollow,
                                                       setUsers,
                                                       setCurrentPage,
                                                       setTotalUsersCount,
                                                       toggleIsFetching
                                                   }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        toggleIsFetching(true)

        usersAPI.getUsers(currentPage, pageSize)
        // axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        //     withCredentials: true
        // })
            .then(data => {
                toggleIsFetching(false)
                setUsers(data.items);
                setTotalUsersCount(data.totalCount)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [currentPage, pageSize]);


    const onClickHandler = (el: number) => {
        setCurrentPage(el);
        toggleIsFetching(true)
        usersAPI.getUsers(el, pageSize)
        // axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${pageSize}`, {
        //     withCredentials: true
        // })
            .then(data => {
                setUsers(data.items);
                toggleIsFetching(false)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users
                users={users}
                totalCount={totalCount}
                loading={loading}
                error={error}
                currentPage={currentPage}
                follow={follow}
                pageSize={pageSize}
                unfollow={unfollow}
                onClickHandler={onClickHandler}
            />
        </>
    )
};



