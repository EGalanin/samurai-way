import * as React from 'react';
import baseUserPhoto from '../../../src/assets/images/avatardefault_92824.svg';
import s from './users.module.css'
import {UserType} from '../../../src/redax/users-reduser';
import {NavLink} from 'react-router-dom';

// export type Response<T = {}> = {
//     data: T
//     fieldsErrors: string[]
//     messages: string[]
//     resultCode: number
// }

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

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((el, i) => {

                return <span
                    key={i}
                    className={currentPage === el ? s.selected : ''}
                    onClick={() => onClickHandler(el)}
                >{el}</span>;
            })}
            {users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                 <img className={s.img} src={u.photos.small || baseUserPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {

                                    unfollow(u.id)

                                    // toggleFollowingProgress(true, u.id)
                                    // usersAPI.unfollow(u.id)
                                    //     // axios.delete<Response>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    //     //     {withCredentials: true,
                                    //     //     headers: {
                                    //     //         'API-KEY': '923e2395-129b-4098-97f8-439987799b24'
                                    //     //     }})
                                    //     .then(res => {
                                    //         if (res.resultCode === 0) {
                                    //             acceptUnfollow(u.id);
                                    //         }
                                    //     })
                                    //     .catch(error => {
                                    //         console.error('Ошибка при отписке на пользователя:', error)
                                    //
                                    //     })
                                    //     .finally(() => toggleFollowingProgress(false, u.id))

                                }}>UnFollow</button>
                                : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {

                                    follow(u.id)

                                    // toggleFollowingProgress(true, u.id)
                                    // usersAPI.follow(u.id)
                                    //     .then(res => {
                                    //         if (res.resultCode === 0) {
                                    //             acceptFollow(u.id);
                                    //         }
                                    //     })
                                    //     .catch(error => {
                                    //         console.error('Ошибка при подписке на пользователя:', error);
                                    //     })
                                    //     .finally(() => toggleFollowingProgress(false, u.id))

                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'Some country'}</div>
                            <div>{'Some city'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};