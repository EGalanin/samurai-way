import * as React from 'react';
import {useEffect} from 'react';
import {Profile} from '../../../src/componets/profile/Profile';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {getUserProfile, RootInterface} from '../../../src/redax/profileReducer';
import {RouteComponentProps, useParams} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type RouteParams  = {
    userId: string;
}

type Props = RouteComponentProps<RouteParams> & {
    profile: RootInterface | null;
    isAuth: boolean
    getUserProfile: (userId: string) => any  //пофиксить
};

const ProfileContainer: React.FC<Props> = (props) => {

    const {getUserProfile, profile} = props;
    const { userId } = useParams<RouteParams>()

    console.log(profile)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log("Fetching profile with ID:", userId); // Логируем id
                if (!userId) {
                    throw new Error("ID is missing");
                }
                getUserProfile(userId)
                console.log("Profile fetched successfully");
            } catch (error) {
                // console.error(error.message); // Логируем ошибку
            }
        };

        fetchProfile();
    }, [userId, getUserProfile]);

    return (
        <Profile profile={profile} />
    );
};

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// const connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent)

type MapStatePropsType = {
    profile: RootInterface | null,
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage?.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    // WithAuthRedirect
)(ProfileContainer)