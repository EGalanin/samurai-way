import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from 'src/api/api';
import {PostType} from 'src/componets/profile/mypost/post/Post';
import {sendMessageAC} from 'src/redax/dialogReducer';


const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

export type ProfileReducerType = {
    posts: PostType[],
    profile: RootInterface | null,
    status: string
}

export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            if (state.profile) {
                return {
                    ...state,
                    profile: {
                        ...state.profile,
                        photos: {
                            ...state.profile.photos,
                            large: action.photos
                        }
                    }
                };
            }
            // Если profile равен null, вы можете либо вернуть текущее состояние, либо обработать это по мере необходимости
            return state;
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

export const deletePost = (postId: number) => (
    {type: DELETE_POST, postId} as const
)

export const savePhotoSuccess = (photos: string) => (
    {type: SAVE_PHOTO_SUCCESS, photos} as const
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

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response));
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    } else {
        throw new Error('Something wrong update Status!');
    }
}

export const savePhoto = (file: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.large));
    } else {
        throw new Error('Something wrong savePhoto!');
    }
}

export type RootInterface = {
    aboutMe?: string;
    contacts: Contacts;
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    fullName?: string;
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



