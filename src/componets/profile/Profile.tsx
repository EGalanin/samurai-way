import React from 'react';
import S from './profile.module.css'

export const Profile = () => {
    return (
        <div className={S.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=62e4a98bd5e230054221b797c8d04b80e78831b1-4282959-images-thumbs&n=13"
                    alt="гора"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={S.posts}>
                    <div className={S.item}>
                        post 1
                    </div>
                    <div className={S.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

