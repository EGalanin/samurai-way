import React from 'react';
import S from './navbar.module.css'
import {NavLink} from 'react-router-dom';
import {Sidebar} from '../sidebar/Sidebar';
import {StateType} from '../../redax/state';

type NavbarType = {
    state: StateType
}

export const Navbar = ({state}: NavbarType) => {

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
            <Sidebar props={state.sidebar}/>
        </nav>
    );
};

