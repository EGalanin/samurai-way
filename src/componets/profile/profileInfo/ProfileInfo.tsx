import React from 'react';
import s from './profileInfo.module.css'
import {Preloader} from '../../../../src/componets/common/Preloader';
import {RootInterface} from '../../../redax/profileReducer';
import {ProfileStatus} from '../profileInfo/ProfileStatus';

type ProfileInfoType = {
    profile: RootInterface | null;
}

export const ProfileInfo = ({profile}: ProfileInfoType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <>
            {/*<div>*/}
            {/*    <img className={s.img} src="https://avatars.mds.yandex.net/i?id=62e4a98bd5e230054221b797c8d04b80e78831b1-4282959-images-thumbs&n=13"*/}
            {/*         alt="гора"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="big photo"/>
                <ProfileStatus  status={'Hello friend!!!'}/>
            </div>
        </>
    );
};

