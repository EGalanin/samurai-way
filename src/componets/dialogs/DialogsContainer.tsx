import React from 'react';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {DialogReducerType, sendMessageAC, updateNewMessageBodyAC} from '../../redax/dialogReducer';
import {RootState} from '../../redax/redax-store';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    dialogsPage: DialogReducerType,
    isAuth: boolean
}


let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth?.isAuth
    }
}

type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

export const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)