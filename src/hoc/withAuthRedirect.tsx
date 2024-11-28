import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RootState} from '../../src/redax/redax-store';

type MapStatePropsTypeForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootState): MapStatePropsTypeForRedirect => ({
    isAuth: state.auth?.isAuth
})

export function WithAuthRedirect<T>(Component: React.ComponentType<T>) {

    const RedirectComponent: React.FC<MapStatePropsTypeForRedirect> = (props) => {
        let {isAuth, ...restProps} = props;
        if (!isAuth) {
            return <Redirect to="/login"/>;
        }
        // Если аутентифицирован, возвращаем переданный компонент
        return <Component {...restProps as T} />;
    };
    // Оборачиваем RedirectComponent в connect
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
