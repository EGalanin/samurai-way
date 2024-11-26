import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostContainer} from '../../componets/profile/mypost/MyPostContainer';
import {RootInterface} from '../../redax/profileReducer';

type ProfileType = {
    profile: RootInterface | null;
}

export const Profile: React.FC<ProfileType> = ({profile}) => {

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer />
        </div>
    );
};

