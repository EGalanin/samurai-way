import {addPostAC, deletePost, profileReducer, ProfileReducerType} from '../../src/redax/profileReducer';

const initialState: ProfileReducerType = {
    posts: [
        {id: 1, count: 5, message: 'Hi, how are you?'},
        {id: 2, count: 10, message: 'Hello'},
        {id: 3, count: 7, message: 'New post'}
    ],
    profile: null,
    status: ''
}

it('Length post should be incremented', () => {
    let action = addPostAC('New post - test')

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
})

it('Message of new post should be "New post - test"', () => {
    let action = addPostAC('New post - test')

    let newState = profileReducer(initialState, action)

    expect(newState.posts[3].message).toBe('New post - test')
})

it('Length post should be incremented after deleted', () => {
    let action = deletePost(1)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
})

