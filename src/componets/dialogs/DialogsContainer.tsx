import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {DialogReducerType, sendMessageAC, updateNewMessageBodyAC} from '../../redax/dialogReducer';
import {RootState} from '../../redax/redax-store';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import React from 'react';

type MapStatePropsType = {
    dialogsPage: DialogReducerType,
    // isAuth: boolean
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth?.isAuth
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

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, mapDispatchToProps),
//     WithAuthRedirect
// )(Dialogs)

const AuthRedirectComponent = WithAuthRedirect(Dialogs)

export const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)