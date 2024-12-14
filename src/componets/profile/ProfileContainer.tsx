import * as React from 'react';
import {useEffect} from 'react';
import {Profile} from '../../../src/componets/profile/Profile';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {getUserProfile, getUserStatus, RootInterface, updateUserStatus} from '../../../src/redax/profileReducer';
import {RouteComponentProps, useParams} from 'react-router-dom';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

type RouteParams  = {
    userId: string;
}

type Props = RouteComponentProps<RouteParams> & {
    profile: RootInterface | null;
    status: string
    isAuth: boolean
    autorizedUser: string | null
    getUserProfile: (userId: string) => any  //пофиксить
    getUserStatus: (userId: string) => any //пофиксить
    updateUserStatus: (status: string) => any // пофиксить
};

const ProfileContainer: React.FC<Props> = (props) => {

    const {getUserProfile, getUserStatus, updateUserStatus, profile, status, isAuth, autorizedUser } = props;
    const { userId } = useParams<RouteParams>()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log("Fetching profile with ID:", userId); // Логируем id
                if (!userId) {
                    // userId = autorizedUser
                    throw new Error("ID is missing");
                }
                getUserProfile(userId)
                console.log("Profile fetched successfully");
                getUserStatus(userId)
                console.log("Get Status successfully");
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
        />
    );
};

type MapStatePropsType = {
    profile: RootInterface | null,
    status: string
    autorizedUser: string | null
    isAuth: boolean

}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage?.profile,
    status: state.profilePage?.status,
    autorizedUser: state.auth?.users,
    isAuth: state.auth?.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    WithAuthRedirect
)(ProfileContainer)