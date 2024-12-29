import * as React from 'react';
import baseUserPhoto from 'src/assets/images/avatardefault_92824.svg';
import s from './users.module.css'
import {NavLink} from 'react-router-dom';
import {UserType} from 'src/redax/users-reduser';

type Props = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleFollowingProgress: (isFollowing: boolean, userId: string) => void
    followingInProgress: string[]
};
export const User = ({
                         follow,
                         unfollow,
                         user,
                         followingInProgress,
                         toggleFollowingProgress
                     }: Props) => {

    return (
        <div className={s.userContainer}>
                    <span className={s.imgContainer}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                 <img className={s.img} src={user.photos.small || baseUserPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                                    unfollow(user.id)

                                }}>UnFollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                                    follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'Some country'}</div>
                            <div>{'Some city'}</div>
                        </span>
                    </span>
        </div>
    );
};
