import React from 'react';
import {MyPosts} from './mypost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {StateType} from '../../index';

type ProfileType = {
    state: StateType
}

export const Profile = ({state}: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    );
};

