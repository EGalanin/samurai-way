import React from 'react';
import s from './dialogs.module.css';
import {Message} from './message/Message';
import {Dialog} from './dialog/Dialog';
import {StateType} from '../../redax/state';

type DialogsType = {
    state: StateType
}

export const Dialogs = ({state}: DialogsType) => {

    const dialogsElements = state.dialogsPage.dialogs.map(d => <Dialog key={d.id}
                                                                       id={d.id}
                                                                       name={d.name}
                                                                       img={d.img}/>)

    const messagesElements = state.dialogsPage.messages.map(m => <Message key={m.id}
                                                                          id={m.id}
                                                                          message={m.message}/>)

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

