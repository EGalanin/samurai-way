import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {DialogReducerType, sendMessageAC} from '../../redax/dialogReducer';
import {RootState} from '../../redax/redax-store';
import {Dispatch} from 'redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

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
