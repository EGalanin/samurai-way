import React from 'react';
import {connect} from 'react-redux';
import {MyPosts} from '../mypost/MyPosts';
import {addPostAC, ProfileReducerType, updateNewPostTextAC} from '../../../redax/profileReducer';
import {RootState} from '../../../redax/redax-store';
import {PostType} from '../../../componets/profile/mypost/post/Post';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    posts: PostType[]
    newPostText: string
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        posts: state.profilePage?.posts,
        newPostText: state.profilePage?.messageForNewPost
    }
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)