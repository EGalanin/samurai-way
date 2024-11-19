import * as React from 'react';
import {useEffect} from 'react';
import {Profile} from '../../../src/componets/profile/Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {setUserProfile} from '../../../src/redax/profileReducer';
import {RouteComponentProps, useParams} from 'react-router-dom';

type ResponseType = {
    userId: string;
}

type RouteParams  = {
    userId: string;
}

type Props = RouteComponentProps<RouteParams> & {
    profile: ResponseType | null;
    setUserProfile: (profile: ResponseType) => void;
};

const ProfileContainer: React.FC<Props> = (props) => {

    const {setUserProfile} = props;
    const { userId } = useParams<RouteParams>()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log("Fetching profile with ID:", userId); // Логируем id
                if (!userId) {
                    throw new Error("ID is missing");
                }
                const res = await axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
                setUserProfile(res.data);
            } catch (error) {
                // console.error(error.message); // Логируем ошибку
            }
        };

        fetchProfile();
    }, [setUserProfile, userId]);


    return (
        <Profile profile={props.profile}/>
    );
};

type MapStatePropsType = {
    profile: ResponseType | null;
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage?.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)