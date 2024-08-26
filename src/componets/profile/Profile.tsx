import React from 'react';
import {MyPosts} from './mypost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {StateType} from '../../redax/state';

type ProfileType = {
    state: StateType
    addPost: (postMessage: string | undefined) => void
}

export const Profile = ({state, addPost}: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts} addPost={addPost}/>
        </div>
    );
};

