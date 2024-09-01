import {DialogType} from '../componets/dialogs/dialog/Dialog';
import {MessageType} from '../componets/dialogs/message/Message';
import {PostType} from '../componets/profile/mypost/post/Post';
import dog from '../images/dog.jpg';

export type StateType = {
    profilePage: {
        messageForNewPost: string
        posts: PostType[]
    }
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
    },
    sidebar: string[]
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: 'wwwwwwww',
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
        sidebar: ['Andrey', 'Sveta', 'Sacha']
    },
    getState() {
        return this._state
    },
    _onChange() {
        console.log('State changed!')
    },
    addPost() {
        let newPost: PostType = {
            id: 5,
            count: 7,
            message: this._state.profilePage.messageForNewPost
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = '';
        this._onChange();
    },
    updateNewPostText(newText: string)  {
        this._state.profilePage.messageForNewPost = newText;
        this._onChange();
    },
    subscribe(observer: () => void) {
        this._onChange = observer;
    }
}




// let onChange = () => {
//     console.log('Hello!!!')
// }


// export const state: StateType = {
//     profilePage: {
//         messageForNewPost: 'wwwwwwww',
//         posts: [
//             {id: 1, count: 5, message: 'Hi, how are you?'},
//             {id: 2, count: 10, message: 'Hello'},
//             {id: 3, count: 7, message: 'New post'}
//         ],
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Sveta', img: dog},
//             {id: 2, name: 'Misha', img: dog},
//             {id: 3, name: 'Valera', img: dog},
//             {id: 4, name: 'Evgeniy', img: dog}
//         ],
//         messages: [
//             {id: 1, message: 'Hi!!!'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Yooo!'}
//         ]
//     },
//     sidebar: [ 'Andrey', 'Sveta', 'Sacha']
// }


// export const addPost = () => {
//     let newPost: PostType = {
//         id: 5,
//         count: 7,
//         message: state.profilePage.messageForNewPost
//     }
//
//     state.profilePage.posts.push(newPost);
//     state.profilePage.messageForNewPost = '';
//     // render(state);
//     onChange();
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.messageForNewPost = newText;
//     // render(state);
//     onChange();
// }

// export const subscribe = (observer: () => void) => {
//     onChange = observer;
// }