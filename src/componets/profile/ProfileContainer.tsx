import * as React from 'react';
import {useEffect} from 'react';
import {Profile} from '../../../src/componets/profile/Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootState} from '../../../src/redax/redax-store';
import {setUserProfile} from '../../../src/redax/profileReducer';

type Props = {
    profile: any   // затиповать профайл
    setUserProfile: (profile: ResponseType) => void; // Добавляем тип для пропсов
};
const ProfileContainer = (props: Props) => {
    const {setUserProfile} = props; // Деструктурируем setUser Profile из пропсов
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`);
                setUserProfile(res.data); // Вызываем действие
            } catch (error) {
                // console.error(error.message); // Логируем ошибку
            }
        };

        fetchProfile();
    }, [setUserProfile])


    return (
        <Profile profile={props.profile}/>
    );
};


type MapStatePropsType = {}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage?.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)