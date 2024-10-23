import React from 'react';
import {PostType} from '../componets/profile/mypost/post/Post';
import {sendMessageAC, updateNewMessageBodyAC} from './dialogReducer';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export type ProfileReducerType = {
    messageForNewPost: string,
    posts: PostType[]
}

export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>

const initialState: ProfileReducerType = {
    messageForNewPost: 'YooHoo!!!',
    posts: [
        {id: 1, count: 5, message: 'Hi, how are you?'},
        {id: 2, count: 10, message: 'Hello'},
        {id: 3, count: 7, message: 'New post'}
    ],
}

export const profileReducer = (state = initialState, action: ActionsType): ProfileReducerType => {

    switch (action.type) {
        case ADD_POST:{
            let newPost: PostType = {
                id: 5,
                count: 7,
                message: state.messageForNewPost
            }
            return  {...state,
                posts: [...state.posts, newPost],
                messageForNewPost: '',
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return  {...state,
                messageForNewPost: action.newText
            };
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);

export const updateNewPostTextAC = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text} as const
)





