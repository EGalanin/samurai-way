import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Navbar} from './componets/navbar/Navbar';
import {Profile} from './componets/profile/Profile';
import {Dialogs} from './componets/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './componets/news/News';
import {Music} from './componets/music/Music';
import {Settings} from './componets/settings/Settings';
import {ActionsType, StateType} from './redax/state';


export type AppType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}


const App = ({state, dispatch}: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile
                        state={state}
                        dispatch={dispatch}
                    />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs state={state}/>}/>


                    {/*<Route path={'/profile'} component={Profile}/>*/}
                    {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
