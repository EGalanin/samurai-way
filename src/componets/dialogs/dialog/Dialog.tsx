import React from 'react';
import s from './../dialogs.module.css';
import {NavLink} from 'react-router-dom';
import dog from '../../../assets/images/dog.jpg';

export type DialogType = {
    id: number
    name: string
    img: string
}

export const Dialog = ({id, name}: DialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>
                <img src={dog} alt="аватар"/>
                {name}
            </NavLink>
        </div>
    )
}




