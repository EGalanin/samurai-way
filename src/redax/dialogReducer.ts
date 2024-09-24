import React from 'react';
import {DialogType} from '../componets/dialogs/dialog/Dialog';
import {MessageType} from '../componets/dialogs/message/Message';
import {ActionsType} from './store';
import dog from '../images/dog.jpg';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Sveta', img: dog},
        {id: 2, name: 'Misha', img: dog},
        {id: 3, name: 'Valera', img: dog},
        {id: 4, name: 'Evgeniy', img: dog}
    ],
    messages: [
        {id: 1, message: 'Hi!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yooo!'}
    ],
    newMessageBody: ''
}

export const dialogReducer = (state: {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
} = initialState, action: ActionsType) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 4, message: body});
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => (
    {type: SEND_MESSAGE} as const
)

export const updateNewMessageBodyAC = (body: string) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body} as const
)


