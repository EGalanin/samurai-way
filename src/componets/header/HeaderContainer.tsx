import React, {useEffect} from 'react';
import {Header} from '../../../src/componets/header/Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {initialState, setAuthUserData} from '../../../src/redax/auth-reduser';

type HeadersProps = {
    isAuth: boolean;
    login: string | null;
    setAuthUserData: (id: string, email: string, login: string) => void;
}

const HeaderContainer: React.FC<HeadersProps> = ({setAuthUserData, isAuth, login}) => {

    useEffect(() => {
        const authMe = async () => {
            try {
                const res = await axios.get<{ resultCode: number; data: { id: number; email: string; login: string } }>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                    withCredentials: true,
                })
                    .then(res => {
                        if (res.data.resultCode === 0) {
                            let {id, email, login} = res.data.data
                            // console.log(id, email, login)
                            setAuthUserData(String(id), email, login);
                        }
                    })
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)