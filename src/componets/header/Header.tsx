import React from 'react';
import S from './header.module.css'

export const Header = () => {
    return (
        <header className={S.header}>
            <h3>Logo</h3>
            <img className={S.img} src="#" alt=""/>
        </header>
    );
};

