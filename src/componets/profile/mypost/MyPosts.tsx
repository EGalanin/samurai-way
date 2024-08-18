import React from 'react';
import s from './myposts.module.css'
import {Post, PostType} from './post/Post';

type MyPostsType = {
    posts: PostType[]
}

export const MyPosts = ({posts}: MyPostsType) => {

    const postsElements = posts.map(p => <Post id={p.id}
                                               message={p.message}
                                               count={p.count}/>)

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
                {postsElements}
            </div>
        </div>
    );
};

