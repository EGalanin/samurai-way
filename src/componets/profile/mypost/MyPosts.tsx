import React, {ChangeEvent, LegacyRef} from 'react';
import s from './myposts.module.css'
import {Post, PostType} from './post/Post';
import {ActionsType, addPostAC, updateNewPostTextAC} from '../../../redax/state';

type MyPostsType = {
    posts: PostType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPosts = ({posts, newPostText, dispatch}: MyPostsType) => {

    const postsElements = posts.map(p => <Post key={p.id}
                                               id={p.id}
                                               message={p.message}
                                               count={p.count}/>)

    // let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            dispatch(addPostAC())
            // addPost(newPostElement.current.value)
            newPostElement.current.value = '';
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))
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

