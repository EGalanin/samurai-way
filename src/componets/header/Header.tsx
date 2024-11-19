import React from 'react';
import s from './header.module.css'
import {NavLink} from 'react-router-dom';

type HeadersType = {
    isAuth: boolean
    login: string |null
}
export const Header = ({isAuth, login}: HeadersType) => {
    return (
        <header className={s.header}>
            <h3>Logo</h3>
            <img className={s.img} src="#" alt=""/>

            <div className={s.loginBlock}>
                {isAuth ? login: ''}
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
};

