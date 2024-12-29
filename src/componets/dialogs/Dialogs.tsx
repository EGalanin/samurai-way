import React from 'react';
import s from './dialogs.module.css';
import {DialogReducerType} from 'src/redax/dialogReducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from 'src/componets/common/formsControls/FormsControl';
import {maxLengthCreator, required} from 'src/utils/validators/validators';
import {Dialog} from 'src/componets/dialogs/dialog/Dialog';
import {Message} from 'src/componets/dialogs/message/Message';

type DialogsType = {
    dialogsPage: DialogReducerType
    sendMessage: (newMessageValue: string) => void
    isAuth: boolean
}

const maxLength100 = maxLengthCreator(100)

export const Dialogs = ({dialogsPage, sendMessage, isAuth}: DialogsType) => {



    const dialogsElements = dialogsPage.dialogs.map(d => <Dialog key={d.id}
                                                                       id={d.id}
                                                                       name={d.name}
                                                                       img={d.img}/>)

    const messagesElements = dialogsPage.messages.map(m => <Message key={m.id}
                                                                          id={m.id}
                                                                          message={m.message}/>)


    let addNewMessage = (values: AddMessageFormValues) => {
        sendMessage(values.newMessageValue)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};


export type AddMessageFormValues = {
    newMessageValue: string;
};

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValues>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageValue'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormValues>({
    form: 'dialogAddMessageForm',
}) (AddMessageForm)

