import React, { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';
import s from './formsControl.module.css';

type FormControlProps = WrappedFieldProps & {
    type: 'textarea' | 'input';
    children?: ReactNode;
};

export const Textarea: React.FC<FormControlProps> = (props) => {
    const { input, meta } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...props} className={meta.error && meta.touched ? s.error : ''} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </FormControl>
    );
};

export const Input: React.FC<FormControlProps> = (props) => {
    const { input, meta } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...props} className={meta.error && meta.touched ? s.error : ''} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </FormControl>
    );
};

const FormControl: React.FC<FormControlProps> = (
    {
        input,
        children,
        meta,
        ...props
    }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div>{children}</div>
        </div>
    );
};
