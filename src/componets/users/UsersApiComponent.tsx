import React, {useEffect, useState} from 'react';
import {UserType} from '../../redax/users-reduser';
import axios from 'axios';
import {Users} from '../../../src/componets/users/Users';

type Props = {
    currentPage: number
    pageSize: number
    totalCount: number
    users: UserType[];
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUlersCount: number) => void
};

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const UsersApiComponent: React.FC<Props> = ({ users, totalCount, currentPage, pageSize, follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
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



    const onClickHandler = (el: number) =>  {
        setCurrentPage(el);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${pageSize}`)
            .then(res => {
                setUsers(res.data.items);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return <Users
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
};



