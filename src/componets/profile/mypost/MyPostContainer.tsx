import {connect} from 'react-redux';
import {addPostAC} from 'src/redax/profileReducer';
import {RootState} from 'src/redax/redax-store';
import {PostType} from 'src/componets/profile/mypost/post/Post';
import {Dispatch} from 'redux';
import MyPosts from 'src/componets/profile/mypost/MyPosts';

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
