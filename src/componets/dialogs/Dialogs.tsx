import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css';
import {Message} from './message/Message';
import {Dialog} from './dialog/Dialog';
import {DialogReducerType} from '../../redax/dialogReducer';

type DialogsType = {
    dialogsPage: DialogReducerType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

export const Dialogs = ({dialogsPage, sendMessage, updateNewMessageBody, isAuth}: DialogsType) => {

  

    const dialogsElements = dialogsPage.dialogs.map(d => <Dialog key={d.id}
                                                                       id={d.id}
                                                                       name={d.name}
                                                                       img={d.img}/>)

    const messagesElements = dialogsPage.messages.map(m => <Message key={m.id}
                                                                          id={m.id}
                                                                          message={m.message}/>)

    const newMessageValue = dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        sendMessage()
    }

    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        updateNewMessageBody(body);
    }

    // if (!isAuth) { return <Redirect to={'/login'} /> }

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

