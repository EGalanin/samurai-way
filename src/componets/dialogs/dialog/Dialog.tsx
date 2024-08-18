import React from 'react';
import s from './../dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type DialogType = {
    id: number
    name: string
}

export const Dialog = ({id, name}: DialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}




