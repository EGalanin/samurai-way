import {store} from './redax/redax-store';
import ReactDOM from 'react-dom';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root')
);
