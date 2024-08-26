import React from 'react';
import S from './post.module.css';
import dog from '../../../../images/dog.jpg';

export type PostType = {
    id: number
    count: number
    message: string | undefined
}

export const Post = ({id, message, count}: PostType) => {
    return (
        <div className={S.item}>
            <img src={dog} alt="аватар"/>
            <div>
                {message}
            </div>
            <div>
                <span>like: {count}</span>
            </div>
        </div>
    );
};

