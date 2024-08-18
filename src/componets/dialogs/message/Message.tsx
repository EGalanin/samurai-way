import React from 'react';
import s from './../dialogs.module.css';

export type MessageType = {
    id: number
    message: string
}

export const Message = ({id, message}: MessageType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

