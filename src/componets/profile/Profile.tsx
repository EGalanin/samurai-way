import React from 'react';
import {MyPosts} from './mypost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {StateType} from '../../redax/state';

type ProfileType = {
    state: StateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile = ({state, addPost, updateNewPostText}: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={state.profilePage.posts}
                addPost={addPost}
                newPostText={state.profilePage.messageForNewPost}
                updateNewPostText={updateNewPostText}
            />
        </div>
    );
};

