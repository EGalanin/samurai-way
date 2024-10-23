import React from 'react';
import {MyPosts} from './mypost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionsType, ProfileReducerType} from '../../redax/profileReducer';
import {MyPostContainer} from '../../componets/profile/mypost/MyPostContainer';
import {store} from '../../redax/redax-store';

// type ProfileType = {
//     state: ProfileReducerType
//     // dispatch: (action: ActionsType) => void
// }

export const Profile: React.FC = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
            {/*<MyPosts*/}
            {/*    posts={state.posts} //state.profilePage.posts*/}
            {/*    dispatch={dispatch}*/}
            {/*    newPostText={state.messageForNewPost}  //state.profilePage.messageForNewPost*/}
            {/*/>*/}
        </div>
    );
};

