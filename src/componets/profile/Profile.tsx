import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostContainer} from '../../componets/profile/mypost/MyPostContainer';

type ProfileType = {
    profile: any
}

export const Profile: React.FC<ProfileType> = ({profile}) => {

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer />
        </div>
    );
};

