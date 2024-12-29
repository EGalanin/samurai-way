import * as React from 'react';
import {UserType} from 'src/redax/users-reduser';
import s from './users.module.css';
import {Paginator} from 'src/componets/common/Paginator/Paginator';
import {User} from 'src/componets/users/User';

type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    users: UserType[];
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onClickHandler: (el: number) => void
    toggleFollowingProgress: (isFollowing: boolean, userId: string) => void
    followingInProgress: string[]
};

export const Users = ({
                          totalCount,
                          pageSize,
                          currentPage,
                          users,
                          follow,
                          unfollow,
                          onClickHandler,
                          followingInProgress,
                          toggleFollowingProgress
                      }: Props) => {

    return (
        <>
            <div className={s.paginationContainer}>
                <Paginator onClickHandler={onClickHandler}
                           pageSize={pageSize}
                           currentPage={currentPage}
                           totalCount={totalCount}
                           portionSize={20}
                />
            </div>
            <div className={s.usersContainer}>
                {users.map(u => (
                    <User key={u.id}
                          followingInProgress={followingInProgress}
                          toggleFollowingProgress={toggleFollowingProgress}
                          follow={follow}
                          unfollow={unfollow} user={u}
                    />
                ))}
            </div>
        </>

    );
};
