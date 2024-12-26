import React, {lazy, useEffect} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {News} from './componets/news/News';
import {Music} from './componets/music/Music';
import {Settings} from './componets/settings/Settings';
import {Navbar} from '../src/componets/navbar/Navbar';
import UsersContainer from '../src/componets/users/UsersContainer';
import HeaderContainer from '../src/componets/header/HeaderContainer';
import Login from '../src/componets/login/Login';
import {connect} from 'react-redux';
import {initializeApp} from '../src/redax/app-reduser';
import {RootState} from '../src/redax/redax-store';
import {Preloader} from '../src/componets/common/Preloader';
import withSuspense from '../src/hoc/withSuspense';

const DialogsContainer = lazy(() => import('../src/componets/dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('../src/componets/profile/ProfileContainer'))

type AppProps = {
    initialized: boolean
    initializeApp: () => void
}

const App: React.FC<AppProps> = ({initialized, initializeApp}) => {

    useEffect(() => {
        const authMe = async () => {
            try {
                initializeApp()
            } catch (error) {
                // console.error(error.message); // Логируем ошибку
            }
        };

        authMe();
    }, [initializeApp]);

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            {/*//state={state.sidebar}*/}
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>
    );
}

type MapStatePropsType = {
    initialized: boolean
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    initialized: state.app?.initialized
})

export default withRouter(connect(mapStateToProps, {initializeApp})(App))
