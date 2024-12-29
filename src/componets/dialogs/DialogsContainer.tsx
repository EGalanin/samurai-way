import {connect} from 'react-redux';
import {DialogReducerType, sendMessageAC} from 'src/redax/dialogReducer';
import {RootState} from 'src/redax/redax-store';
import {Dispatch} from 'redux';
import {WithAuthRedirect} from 'src/hoc/withAuthRedirect';
import {Dialogs} from 'src/componets/dialogs/Dialogs';

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
    sendMessage: (newMessageValue: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageValue: string) => {
            dispatch(sendMessageAC(newMessageValue))
        }
    }
}

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, mapDispatchToProps),
//     WithAuthRedirect
// )(Dialogs)

const AuthRedirectComponent = WithAuthRedirect(Dialogs)

const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;
