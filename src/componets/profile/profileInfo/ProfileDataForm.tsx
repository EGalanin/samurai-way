import {RootInterface} from 'src/redax/profileReducer';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from 'src/componets/common/formsControls/FormsControl';
import {required} from 'src/utils/validators/validators';

type ProfileDataFormType = {
    profile: RootInterface | null;
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType, {}, string>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><button >Save</button></div>
            <div><b>Full name: </b><Field type={'text'}
                                          name={'fullName'}
                                          placeholder={'Полное имя'}
                                          component={Input}
                                          validate={[required]}
            /></div>

            <div><b>Looking for a job:</b> <Field type={'checkbox'}
                                                  name={'lookingForAJob'}
                                                  component={Input}
            /></div>

            <div><b>My professional skills: </b><Field type={'text'}
                                                       name={'skills'}
                                                       placeholder={'ваши скилы'}
                                                       component={Textarea}
                                                       validate={[required]}
            /></div>

            <div><b>About me: </b><Field type={'text'}
                                         name={'aboutMe'}
                                         placeholder={'About me'}
                                         component={Textarea}
                                         validate={[required]}
            /></div>

            {/*<div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
            {/*    const contactValue = profile.contacts[key as keyof typeof profile.contacts]; // Утверждение типа*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={contactValue}/>;*/}
            {/*})} </div>*/}
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
