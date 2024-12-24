import * as React from 'react';
import {UserType} from '../../../src/redax/users-reduser';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from '../users/User';

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
        <div>
            <Paginator onClickHandler={onClickHandler}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       totalCount={totalCount}
            />

            {users.map(u => (
                <User key={u.id}
                      followingInProgress={followingInProgress}
                      toggleFollowingProgress={toggleFollowingProgress}
                      follow={follow}
                      unfollow={unfollow} user={u}
                />
            ))}
        </div>
    );
};
