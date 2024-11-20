import * as React from 'react';
import baseUserPhoto from '../../../src/assets/images/avatardefault_92824.svg';
import s from './users.module.css'
import {useState} from 'react';
import {UserType} from '../../../src/redax/users-reduser';
import {NavLink} from 'react-router-dom';
import axios, {AxiosResponse} from 'axios';
import {usersAPI} from '../../../src/api/api';

export type Response<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    users: UserType[];
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    loading: boolean
    error: string | null
    onClickHandler: (el: number) => void
};
export const Users = ({totalCount, pageSize,  currentPage, users, follow, unfollow, loading, error, onClickHandler}: Props) => {

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
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
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {loading ? <div>Loading...</div> : users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                 <img className={s.img} src={u.photos.small || baseUserPhoto} alt="" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    usersAPI.deleteUser(u.id)
                                    // axios.delete<Response>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    //     {withCredentials: true,
                                    //     headers: {
                                    //         'API-KEY': '923e2395-129b-4098-97f8-439987799b24'
                                    //     }})
                                        .then(res => {
                                            // console.log(res.data)
                                            if (res.resultCode === 0) {
                                                unfollow(u.id);
                                            }
                                        })
                                        .catch(error => {
                                        console.error("Ошибка при отписке на пользователя:", error);
                                    });

                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    usersAPI.postUser(u.id)
                                    // axios.post<Response>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    //     {},
                                    //     {withCredentials: true,
                                    //         headers: {
                                    //             'API-KEY': '923e2395-129b-4098-97f8-439987799b24'
                                    //         }})
                                        .then(res => {
                                            // console.log(res.data)
                                            if (res.resultCode === 0) {
                                                follow(u.id);
                                            }
                                        })
                                        .catch(error => {
                                            console.error("Ошибка при подписке на пользователя:", error);
                                        });

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