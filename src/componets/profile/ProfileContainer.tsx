import * as React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps, useParams} from 'react-router-dom';
import {compose} from 'redux';
import {WithAuthRedirect} from 'src/hoc/withAuthRedirect';
import {getUserProfile, getUserStatus, RootInterface, savePhoto, updateUserStatus} from 'src/redax/profileReducer';
import {Profile} from 'src/componets/profile/Profile';
import {RootState} from 'src/redax/redax-store';

type RouteParams = {
    userId: string;
}

type Props = RouteComponentProps<RouteParams> & {
    profile: RootInterface | null;
    status: string
    isAuth: boolean
    autorizedUserId: string | null
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
};

const ProfileContainer: React.FC<Props> = (props) => {

    const {getUserProfile, getUserStatus, updateUserStatus, savePhoto, profile, status, isAuth, autorizedUserId} = props;
    const {userId} = useParams<RouteParams>()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (!userId) {
                    if (autorizedUserId) {
                        getUserProfile(autorizedUserId);
                    } else {
                        throw new Error('ID авторизованного пользователя отсутствует');
                    }
                    return;
                }
                getUserProfile(userId)
                getUserStatus(userId)
            } catch (error) {
                // console.error(error.message); // Логируем ошибку
            }
        };
        fetchProfile();
    }, [userId, getUserProfile, getUserStatus]);

    return (
        <Profile profile={profile}
                 status={status}
                 updateUserStatus={updateUserStatus}
                 isOwner={!!userId}
                 savePhoto={savePhoto}
        />
    );
};

type MapStatePropsType = {
    profile: RootInterface | null,
    status: string
    autorizedUserId: string | null
    isAuth: boolean

}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage?.profile,
    status: state.profilePage?.status,
    autorizedUserId: state.auth?.userId,
    isAuth: state.auth?.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    WithAuthRedirect
)(ProfileContainer)
