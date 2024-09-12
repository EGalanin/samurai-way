import React from 'react';
import {MyPosts} from './mypost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionsType, StateType} from '../../redax/state';

type ProfileType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

export const Profile = ({state, dispatch}: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={state.profilePage.posts}
                dispatch={dispatch}
                newPostText={state.profilePage.messageForNewPost}
            />
        </div>
    );
};

