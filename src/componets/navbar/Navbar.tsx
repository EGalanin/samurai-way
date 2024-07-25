import React from 'react';
import S from './navbar.module.css'

export const Navbar = () => {

    return (
        <nav className={S.nav}>
            <div className={S.item}>
                <a>Profile</a>
            </div>
            <div className={`${S.item} ${S.activ}`}>
                <a>Message</a>
            </div>
            <div className={S.item}>
                <a>News</a>
            </div>
            <div className={S.item}>
                <a>Music</a>
            </div>
            <div className={S.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

