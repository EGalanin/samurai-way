import React from 'react';
import {MyPostContainer} from 'src/componets/profile/mypost/MyPostContainer';
import {RootInterface} from 'src/redax/profileReducer';
import {ProfileInfo} from 'src/componets/profile/profileInfo/ProfileInfo';

type ProfileType = {
    profile: RootInterface | null;
    status: string
    updateUserStatus: (status: string) => any // пофиксить
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const Profile: React.FC<ProfileType> = ({profile, status, savePhoto, isOwner, updateUserStatus}) => {

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateUserStatus={updateUserStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
            />
            <MyPostContainer />
        </div>
    );
};

