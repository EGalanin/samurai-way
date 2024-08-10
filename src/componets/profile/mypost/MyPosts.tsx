import React from 'react';
import s from './myposts.module.css'
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
            <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' count={5}/>
                    <Post message='Hello' count={10}/>
                    <Post message='New post' count={7}/>

                </div>
            </div>
    );
};

