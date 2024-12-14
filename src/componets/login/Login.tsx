import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../componets/common/formsControls/FormsControl';
import {required} from '../../utils/validators/validators';
import {ActionsType, login} from '../../redax/auth-reduser';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../redax/redax-store';
import {Redirect} from 'react-router-dom';
import s from '../common/formsControls/formsControl.module.css'

type LoginFormData = {
    email: string;
    password: string;
    rememberMe: boolean;
};

type Props = {
    login: (email: string, password: string, rememberMe: boolean) => void;
    isAuth: boolean
};

// Объединяем InjectedFormProps и Props
type LoginFormProps = InjectedFormProps<LoginFormData> & Props;

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       name={'email'}
                       placeholder="Email"
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="password"
                       name={'password'}
                       placeholder="Password"
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="checkbox"
                       name={'rememberMe'}
                       component={Input}/> remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<LoginFormData>({
    form: 'login',
})(LoginForm)


const Login: React.FC<Props> = (props) => {
    const handleSubmit = (formData: LoginFormData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit}/>
        </div>
    );
};

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => ({
    login: (email: string, password: string, rememberMe: boolean) => dispatch(login(email, password, rememberMe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)