import React from 'react';
import s from './header.module.css'
import {NavLink} from 'react-router-dom';

type HeadersType = {
    isAuth: boolean
    login: string |null
    logout: () => void;
}
export const Header = ({isAuth, login, logout}: HeadersType) => {
    return (
        <header className={s.header}>
            <h3>Logo</h3>
            <img className={s.img} src="#" alt=""/>

            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
};

