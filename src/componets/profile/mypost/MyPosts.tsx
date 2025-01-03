import React from 'react';
import s from './myposts.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from 'src/utils/validators/validators';
import {Textarea} from 'src/componets/common/formsControls/FormsControl';
import {Post, PostType} from 'src/componets/profile/mypost/post/Post';

type MyPostsType = {
    posts: PostType[];
    addPost: (newPostText: string) => void;
}

const maxLength10 = maxLengthCreator(10)

const MyPosts = ({posts, addPost}: MyPostsType) => {

    const postsElements = posts.map(p => <Post key={p.id}
                                               id={p.id}
                                               message={p.message}
                                               count={p.count}/>)

    const addPostMessageHandler = (value: AddMessagePostValues) => {
        if (value.newPostText) {
            addPost(value.newPostText)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddMessagePostRedux onSubmit={addPostMessageHandler}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export type AddMessagePostValues = {
    newPostText: string;
};

const AddMessagePost: React.FC<InjectedFormProps<AddMessagePostValues>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       placeholder={'Post message...'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddMessagePostRedux = reduxForm<AddMessagePostValues>({
    form: 'profileAddPostMessageForm',
})(AddMessagePost)

export default React.memo(MyPosts);
