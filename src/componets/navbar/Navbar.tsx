import React from 'react';
import S from './navbar.module.css'
import {NavLink} from 'react-router-dom';

// type NavbarType = {
//     isActive: boolean
// }

export const Navbar = () => {

    return (
        <nav className={S.nav}>
            <div className={S.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={'/dialogs'}>Message</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
};

