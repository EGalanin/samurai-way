import {PostType} from '../componets/profile/mypost/post/Post';
import {sendMessageAC} from './dialogReducer';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type ProfileReducerType = {
    posts: PostType[],
    profile: RootInterface | null,
    status: string
}

export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setUserProfile>

const initialState: ProfileReducerType = {
    posts: [
        {id: 1, count: 5, message: 'Hi, how are you?'},
        {id: 2, count: 10, message: 'Hello'},
        {id: 3, count: 7, message: 'New post'}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsType): ProfileReducerType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                count: 0,
                message: action.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const);

export const setUserProfile = (profile: RootInterface | null) => (
    {type: SET_USER_PROFILE, profile} as const
)

export const setStatus = (status: string) => (
    {type: SET_STATUS, status} as const
)

//thunk
// export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
//     try {
//         const response = await usersAPI.getProfile(userId);
//         dispatch(setUserProfile(response));
//     } catch (error) {
//         console.error('Error in getUser Profile:', error);
//     }
// };

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response));
        })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            console.log(response)
            dispatch(setStatus(response));
        })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            } else {
                throw new Error('Something wrong update Status!');
            }
        })
}

export type RootInterface = {
    aboutMe: string;
    contacts: Contacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: Photos;
}

export type Photos = {
    small: string;
    large: string;
}

export type Contacts = {
    facebook: string;
    website: string;
    vk?: any;
    twitter?: any;
    instagram: string;
    youtube?: any;
    github: string;
    mainLink: string;
}



