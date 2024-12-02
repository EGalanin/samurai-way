import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostContainer} from '../../componets/profile/mypost/MyPostContainer';
import {RootInterface} from '../../redax/profileReducer';

type ProfileType = {
    profile: RootInterface | null;
    status: string
    updateUserStatus: (status: string) => any // пофиксить
}

export const Profile: React.FC<ProfileType> = ({profile, status, updateUserStatus}) => {

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateUserStatus={updateUserStatus}
            />
            <MyPostContainer />
        </div>
    );
};

