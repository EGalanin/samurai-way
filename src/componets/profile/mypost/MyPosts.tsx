import React, {ChangeEvent, LegacyRef} from 'react';
import s from './myposts.module.css'
import {Post, PostType} from './post/Post';

type MyPostsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = ({posts, addPost, newPostText, updateNewPostText}: MyPostsType) => {

    const postsElements = posts.map(p => <Post key={p.id}
                                               id={p.id}
                                               message={p.message}
                                               count={p.count}/>)

    // let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value)
            newPostElement.current.value = '';
            // updateNewPostText('');
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);

    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={newPostText}></textarea>
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

