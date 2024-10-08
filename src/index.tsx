import {store} from './redax/store';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


const renderTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

renderTree()
store.subscribe(renderTree)