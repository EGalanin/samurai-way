import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Navbar} from './componets/navbar/Navbar';
import {Profile} from './componets/profile/Profile';
import {Dialogs} from './componets/dialogs/Dialogs';
// import mountain from '/src/images/mountain.webp';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                {/*<Profile />*/}
                <Dialogs/>
            </div>

        </div>
    );
}

export default App;
