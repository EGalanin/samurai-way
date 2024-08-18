import React from 'react';
import s from './dialogs.module.css';
import {Message} from './message/Message';
import {Dialog} from './dialog/Dialog';
import {StateType} from '../../index';

type DialogsType = {
    state: StateType
}

export const Dialogs = ({state}: DialogsType) => {

    const dialogsElements = state.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)

    const messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

