import {connect} from 'react-redux';
import MyPosts from '../mypost/MyPosts';
import {addPostAC} from '../../../redax/profileReducer';
import {RootState} from '../../../redax/redax-store';
import {PostType} from '../../../componets/profile/mypost/post/Post';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    posts: PostType[]
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        posts: state.profilePage?.posts
    }
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)