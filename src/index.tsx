import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redax/state';
import {addPost} from './redax/state';

ReactDOM.render(
    <App state={state} addPost={addPost}/>,
    document.getElementById('root')
);