import {store} from './redax/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


let renderTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}

renderTree()
store.subscribe(renderTree)