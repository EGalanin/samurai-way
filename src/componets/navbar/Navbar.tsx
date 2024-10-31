import React from 'react';
import S from './navbar.module.css'
import {NavLink} from 'react-router-dom';
import {Sidebar} from '../sidebar/Sidebar';
import {SidebarReducerType} from '../../redax/sidebarReducer';

// type NavbarType = {
//     state: SidebarReducerType
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
                <NavLink to={'/users'}>Users</NavLink>
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
            {/*<Sidebar props={state.users}/> //убрал временно чтобы не оборачивать в контейнерную компоненту */}
        </nav>
    );
};

