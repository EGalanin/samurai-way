import React, {ChangeEvent, LegacyRef} from 'react';
import s from './myposts.module.css'
import {Post, PostType} from './post/Post';
import {ActionsType, addPostAC, updateNewPostTextAC} from '../../../redax/profileReducer';

type MyPostsType = {
    posts: PostType[];
    newPostText: string;
    updateNewPostText: (text: string) => void;
    addPost: () => void;
}

export const MyPosts = ({posts, newPostText, updateNewPostText, addPost}: MyPostsType) => {

    const postsElements = posts.map(p => <Post key={p.id}
                                               id={p.id}
                                               message={p.message}
                                               count={p.count}/>)

    // let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            addPost()
            // addPost(newPostElement.current.value)
            newPostElement.current.value = '';
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
        // updateNewPostText(e.currentTarget.value);
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

