import {store} from './redax/redax-store';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);
