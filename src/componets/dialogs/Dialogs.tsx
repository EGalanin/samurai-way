import React from 'react';
import s from './dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogType = {
    id: string
    name: string
}

type MessageType = {
    message: string
}

const Dialog = ({id, name}: DialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}: MessageType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog id={'1'} name={'Sveta'}/>
                <Dialog id={'2'} name={'Misha'}/>
                <Dialog id={'3'} name={'Valera'}/>
                <Dialog id={'4'} name={'Evgeniy'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!!!'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yooo!'}/>
            </div>
        </div>
    );
};

