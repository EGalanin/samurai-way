import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css';
import {Message} from './message/Message';
import {Dialog} from './dialog/Dialog';
import {ActionsType, StateType} from '../../redax/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redax/dialogReducer';

type DialogsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

export const Dialogs = ({state, dispatch}: DialogsType) => {

    const dialogsElements = state.dialogsPage.dialogs.map(d => <Dialog key={d.id}
                                                                       id={d.id}
                                                                       name={d.name}
                                                                       img={d.img}/>)

    const messagesElements = state.dialogsPage.messages.map(m => <Message key={m.id}
                                                                          id={m.id}
                                                                          message={m.message}/>)

    const newMessageValue = state.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        dispatch(sendMessageAC())
    }

    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        dispatch(updateNewMessageBodyAC(body));

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageValue}
                        onChange={onSendMessageChange}
                        placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

