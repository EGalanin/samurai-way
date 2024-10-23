import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Profile} from './componets/profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './componets/news/News';
import {Music} from './componets/music/Music';
import {Settings} from './componets/settings/Settings';
import {DialogsContainer} from '../src/componets/dialogs/DialogsContainer';
import {Navbar} from '../src/componets/navbar/Navbar';


// export type AppType = {
//     state: RootState
//     dispatch: (action: ActionsType) => void
// }

const App = () => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar />
                {/*//state={state.sidebar}*/}
                <div className={'app-wrapper-content'}>

                    <Route path={'/profile'} component={Profile}/>

                    <Route path={'/dialogs'} component={DialogsContainer} />

                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
    );
}

export default App;
