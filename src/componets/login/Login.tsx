import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type Props = {};

type LoginFormProps = Props & InjectedFormProps;

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={'login'} placeholder="Login" component={'input'}/>
            </div>
            <div>
                <Field type="password" name={'password'} placeholder="Password" component={'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'remember me'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

export const Login: React.FC<Props> = (props) => {
    const handleSubmit = (formData: any) => {
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit} />
        </div>
    );
};