import React, {LegacyRef} from 'react';
import s from './myposts.module.css'
import {Post, PostType} from './post/Post';

type MyPostsType = {
    posts: PostType[]
    addPost: (postMessage: string | undefined) => void
}

export const MyPosts = ({posts, addPost}: MyPostsType) => {

    const postsElements = posts.map(p => <Post key={p.id}
                                               id={p.id}
                                               message={p.message}
                                               count={p.count}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        let text = newPostElement.current?.value
        addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

