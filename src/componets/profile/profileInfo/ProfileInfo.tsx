import React from 'react';
import s from './profileInfo.module.css'



export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.img} src="https://avatars.mds.yandex.net/i?id=62e4a98bd5e230054221b797c8d04b80e78831b1-4282959-images-thumbs&n=13"
                     alt="гора"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    );
};

