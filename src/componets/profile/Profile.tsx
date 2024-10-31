import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostContainer} from '../../componets/profile/mypost/MyPostContainer';

// type ProfileType = {
//     state: ProfileReducerType
//     // dispatch: (action: ActionsType) => void
// }

export const Profile: React.FC = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    );
};

