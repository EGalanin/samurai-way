import * as React from 'react';
import {useEffect} from 'react';
import {Profile} from '../../../src/componets/profile/Profile';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {getUserProfile, getUserStatus, RootInterface, updateUserStatus} from '../../../src/redax/profileReducer';
import {RouteComponentProps, useParams} from 'react-router-dom';
import {compose} from 'redux';

type RouteParams  = {
    userId: string;
}

type Props = RouteComponentProps<RouteParams> & {
    profile: RootInterface | null;
    status: string
    isAuth: boolean
    getUserProfile: (userId: string) => any  //пофиксить
    getUserStatus: (userId: string) => any //пофиксить
    updateUserStatus: (status: string) => any // пофиксить
};

const ProfileContainer: React.FC<Props> = (props) => {


    const {getUserProfile, getUserStatus, updateUserStatus, profile, status} = props;
    const { userId } = useParams<RouteParams>()


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log("Fetching profile with ID:", userId); // Логируем id
                if (!userId) {
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
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage?.profile,
    status: state.profilePage?.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    // WithAuthRedirect
)(ProfileContainer)