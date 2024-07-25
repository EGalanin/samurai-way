import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Navbar} from './componets/navbar/Navbar';
import {Profile} from './componets/profile/Profile';
// import mountain from '/src/images/mountain.webp';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
