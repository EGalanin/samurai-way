import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from 'src/componets/common/formsControls/FormsControl';
import {required} from 'src/utils/validators/validators';
import {ActionsType, login} from 'src/redax/auth-reduser';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from 'src/redax/redax-store';
import {Redirect} from 'react-router-dom';
import s from 'src/componets/common/formsControls/formsControl.module.css'

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
type LoginFormProps = InjectedFormProps<LoginFormData> ;

export const LoginForm: React.FC<LoginFormProps> = ({handleSubmit, error}: LoginFormProps ) => {
    return (
        <form onSubmit={handleSubmit}>
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
            { error && <div className={s.formSummaryError}>
                {error}
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
