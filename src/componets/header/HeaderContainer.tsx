import React, {useEffect} from 'react';
import {Header} from '../../../src/componets/header/Header';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {getAuthUser, setAuthUserData} from '../../../src/redax/auth-reduser';
import {authAPI} from '../../api/api';

type HeadersProps = {
    isAuth: boolean;
    login: string | null;
    // setAuthUserData: (id: string, email: string, login: string) => void;
    getAuthUser: () => void //типизация ???
}

const HeaderContainer: React.FC<HeadersProps> = ({getAuthUser, isAuth, login}) => {

    useEffect(() => {
        const authMe = async () => {
            try {
                getAuthUser()
                // authAPI.me()
                //     .then(res => {
                //         if (res.resultCode === 0) {
                //             let {id, email, login} = res.data
                //             setAuthUserData(String(id), email, login);
                //         }
                //     })
            } catch (error) {
                // console.error(error.message); // Логируем ошибку
            }
        };

        authMe();
    }, [setAuthUserData]);

    return (
        <Header login={login ?? ''} isAuth={isAuth}/>
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

export default connect(mapStateToProps, {getAuthUser})(HeaderContainer)