import React from 'react';
import {Header} from 'src/componets/header/Header';
import {connect} from 'react-redux';
import {RootState} from 'src/redax/redax-store';
import {logout} from 'src/redax/auth-reduser';

type HeadersProps = {
    isAuth: boolean;
    login: string | null;
    logout: () => void;
}

const HeaderContainer: React.FC<HeadersProps> = ({isAuth, login, logout}) => {

    // useEffect(() => {
    //     const authMe = async () => {
    //         try {
    //             getAuthUser()
    //         } catch (error) {
    //             // console.error(error.message); // Логируем ошибку
    //         }
    //     };
    //
    //     authMe();
    // }, [setAuthUserData]);

    return (
        <Header login={login ?? ''} isAuth={isAuth} logout={logout}/>
    );
};

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    isAuth: state.auth?.isAuth,
    login: state.auth?.login,
})

export default connect(mapStateToProps, {logout})(HeaderContainer)
