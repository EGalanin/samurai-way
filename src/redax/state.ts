import {DialogType} from '../componets/dialogs/dialog/Dialog';
import {MessageType} from '../componets/dialogs/message/Message';
import {PostType} from '../componets/profile/mypost/post/Post';
import dog from '../images/dog.jpg';

export type StateType = {
    profilePage: {
        posts: PostType[]
    }
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
    },
    sidebar: string[]
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, count: 5, message: 'Hi, how are you?'},
            {id: 2, count: 10, message: 'Hello'},
            {id: 3, count: 7, message: 'New post'}
        ],
    },
    dialogsPage: {
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
        ]
    },
    sidebar: [ 'Andrey', 'Sveta', 'Sacha']
}

export const addPost = (postMessage: string | undefined) => {
    let newPost: PostType = {
        id: 5,
        count: 7,
        message: postMessage
    }

    state.profilePage.posts.push(newPost)
}