import React from 'react';
import S from './post.module.css';
import baseUserPhoto from 'src/assets/images/avatardefault_92824.svg';

export type PostType = {
    id: number
    count: number
    message: string | undefined
}

export const Post = ({id, message, count}: PostType) => {
    return (
        <div className={S.item}>
            <img src={baseUserPhoto} alt="аватар"/>
            <div>
                {message}
            </div>
            <div>
                <span>like: {count}</span>
            </div>
        </div>
    );
};

