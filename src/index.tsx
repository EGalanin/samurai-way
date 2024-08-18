import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogType} from './componets/dialogs/dialog/Dialog';
import {MessageType} from './componets/dialogs/message/Message';
import {PostType} from './componets/profile/mypost/post/Post';

export type StateType = {
    dialogs: DialogType[]
    messages: MessageType[]
    posts: PostType[]
}

const state: StateType = {
    dialogs: [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Evgeniy'}
    ],
    messages: [
        {id: 1, message: 'Hi!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yooo!'}
    ],
    posts: [
        {id: 1, count: 5, message: 'Hi, how are you?'},
        {id: 2, count: 10, message: 'Hello'},
        {id: 3, count: 7, message: 'New post'}
    ]
}

ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);