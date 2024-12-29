import React, {ChangeEvent, useState} from 'react';
import s from './profileInfo.module.css'
import {Preloader} from 'src/componets/common/Preloader';
import {RootInterface} from 'src/redax/profileReducer';
import baseUserPhoto from 'src/assets/images/avatardefault_92824.svg'
import ProfileDataFormReduxForm from 'src/componets/profile/profileInfo/ProfileDataForm';
import {ProfileStatus} from 'src/componets/profile/profileInfo/ProfileStatus';


type ProfileInfoType = {
    profile: RootInterface | null;
    status: string
    updateUserStatus: (status: string) => any // пофиксить
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo = ({profile, status, isOwner, savePhoto, updateUserStatus}: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            savePhoto(e.target.files[0]);
        } else {
            console.error('No file selected');
        }
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmut = (formData: any) => {
        console.log(formData)
    }

    return (
        <>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : baseUserPhoto} alt="big photo"
                     className={s.mainPhoto}/>
                {isOwner ? '' : <input type={'file'} onChange={mainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataFormReduxForm  onSubmit={onSubmut}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}


                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </>
    );
};

type ProfileDataType = {
    profile: RootInterface | null;
    isOwner?: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <>
        {!isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div><b>Full name: </b>{profile.fullName}</div>

            <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>

            <div><b>My professional skills: </b>{profile.lookingForAJob}</div>

            <div><b>About me: </b>{profile.aboutMe}</div>

            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                const contactValue = profile.contacts[key as keyof typeof profile.contacts]; // Утверждение типа
                return <Contact key={key} contactTitle={key} contactValue={contactValue}/>;
            })} </div>
        </>
    )
}

type ContactProps = {
    contactTitle: string;
    contactValue: string | undefined; // или string | null, в зависимости от ваших требований
};

const Contact: React.FC<ContactProps> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

