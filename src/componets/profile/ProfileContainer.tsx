import * as React from 'react';
import {useEffect} from 'react';
import {Profile} from '../../../src/componets/profile/Profile';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {getUserProfile, RootInterface, setUserProfile} from '../../../src/redax/profileReducer';
import {Redirect, RouteComponentProps, useParams} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type RouteParams  = {
    userId: string;
}

type Props = RouteComponentProps<RouteParams> & {
    profile: RootInterface | null;
    isAuth: boolean
    // setUserProfile: (profile: RootInterface | null) => void;
    getUserProfile: (userId: string) => any  //пофиксить
};

const ProfileContainer: React.FC<Props> = (props) => {

    // const {setUserProfile} = props;
    const {getUserProfile, isAuth, profile} = props;
    const { userId } = useParams<RouteParams>()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log("Fetching profile with ID:", userId); // Логируем id
                if (!userId) {
                    throw new Error("ID is missing");
                }
                getUserProfile(userId)
                // usersAPI.getProfile(userId)
                //     .then((response) => {
                //         console.log(response)
                //         // setUserProfile(response);
                //     })
            } catch (error) {
                // console.error(error.message); // Логируем ошибку
            }
        };

        fetchProfile();
    }, [userId]);

    if (!isAuth) { return <Redirect to={'/login'} /> }

    return (
        <Profile profile={profile} />
    );
};

type MapStatePropsType = {
    profile: RootInterface | null,
    isAuth: boolean
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage?.profile,
    isAuth: state.auth?.isAuth
})

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer)