import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {News} from './componets/news/News';
import {Music} from './componets/music/Music';
import {Settings} from './componets/settings/Settings';
import {DialogsContainer} from '../src/componets/dialogs/DialogsContainer';
import {Navbar} from '../src/componets/navbar/Navbar';
import UsersContainer from '../src/componets/users/UsersContainer';
import ProfileContainer from '../src/componets/profile/ProfileContainer';
import HeaderContainer from '../src/componets/header/HeaderContainer';
import {Login} from '../src/componets/login/Login';


const App = () => {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar />
                {/*//state={state.sidebar}*/}
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                    <Route path={'/dialogs'} component={DialogsContainer} />
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login />}/>
                </div>
            </div>
    );
}

export default App;
