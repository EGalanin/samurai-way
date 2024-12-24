import {DialogType} from '../componets/dialogs/dialog/Dialog';
import {MessageType} from '../componets/dialogs/message/Message';
import dog from '../assets/images/dog.jpg';
import {ActionsType} from './profileReducer';

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

export type DialogReducerType = {
    dialogs: DialogType[]
    messages: MessageType[]

}

const initialState: DialogReducerType = {
    dialogs: [
        {id: 1, name: 'Sveta', img: dog},
        {id: 2, name: 'Misha', img: dog},
        {id: 3, name: 'Valera', img: dog},
        {id: 4, name: 'Evgeniy', img: dog}
    ],
    messages: [
        {id: 1, message: 'Hi!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yooo!'}
    ]
}

export const dialogReducer = (state = initialState, action: ActionsType): DialogReducerType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageValue;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageValue: string) => (
    {type: SEND_MESSAGE, newMessageValue} as const
)



