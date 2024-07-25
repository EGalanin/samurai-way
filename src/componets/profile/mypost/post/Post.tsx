import React from 'react';
import S from './post.module.css';
import dog from '../../../../images/dog.jpg';

type Posttype = {
    message: string
    count: number
}

export const Post = ({message, count}: Posttype) => {
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

