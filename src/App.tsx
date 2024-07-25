import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {NavBar} from './componets/navBar/NavBar';
import {Profile} from './componets/profile/Profile';
// import mountain from '/src/images/mountain.webp';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Profile />
        </div>
    );
}

export default App;
