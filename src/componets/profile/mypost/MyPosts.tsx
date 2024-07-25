import React from 'react';
import S from './myposts.module.css'
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                <div className={S.posts}>
                    <Post message='Hi, how are you?' count={5}/>
                    <Post message='Hello' count={10}/>
                    <Post message='New post' count={7}/>

                </div>
            </div>
    );
};

