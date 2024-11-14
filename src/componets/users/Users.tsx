import * as React from 'react';
import baseUserPhoto from '../../../src/assets/images/avatardefault_92824.svg';
import s from './users.module.css'
import {useState} from 'react';
import {UserType} from '../../../src/redax/users-reduser';
import {NavLink} from 'react-router-dom';

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
                                ? <button onClick={() => unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => follow(u.id)}>Follow</button>}
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