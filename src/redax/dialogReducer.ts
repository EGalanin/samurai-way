import React from 'react';
import {DialogType} from '../componets/dialogs/dialog/Dialog';
import {MessageType} from '../componets/dialogs/message/Message';
import dog from '../assets/images/dog.jpg';
import {ActionsType} from './profileReducer';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogReducerType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}

const initialState: DialogReducerType = {
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

export const dialogReducer = (state = initialState, action: ActionsType): DialogReducerType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
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


