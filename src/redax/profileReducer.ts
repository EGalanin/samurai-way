import React from 'react';
import {PostType} from '../componets/profile/mypost/post/Post';
import {ActionsType} from './store';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
    messageForNewPost: 'YooHoo!!!',
    posts: [
        {id: 1, count: 5, message: 'Hi, how are you?'},
        {id: 2, count: 10, message: 'Hello'},
        {id: 3, count: 7, message: 'New post'}
    ],
}

export const profileReducer = (state: {
    messageForNewPost: string,
    posts: PostType[]
} = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                count: 7,
                message: state.messageForNewPost
            }
            state.posts.push(newPost);
            state.messageForNewPost = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText;
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);

export const updateNewPostTextAC = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text} as const
)





