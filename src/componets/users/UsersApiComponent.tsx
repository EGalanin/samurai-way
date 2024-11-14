import React, {useEffect, useState} from 'react';
import {UserType} from '../../redax/users-reduser';
import axios from 'axios';
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
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
};

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

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
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                toggleIsFetching(false)
                setUsers(res.data.items);
                setTotalUsersCount(res.data.totalCount)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setUsers]);


    const onClickHandler = (el: number) => {
        setCurrentPage(el);
        toggleIsFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${pageSize}`)
            .then(res => {
                setUsers(res.data.items);
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



