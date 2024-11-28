import React, {useEffect, useRef, useState} from 'react';
import s from './profileInfo.module.css';
import { RootInterface } from '../../../redax/profileReducer';

type ProfileStatusType = {
    status: string;
};

export const ProfileStatus = ({ status }: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setCurrentStatus(status);
    }, [status]);

    useEffect(() => {
        if (editMode && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editMode]);

    const handleClick = () => {
        setEditMode(true);
    };

    const handleBlur = () => {
        setEditMode(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentStatus(e.target.value);

    };

    return (
        <>
            {editMode ? (
                <div>
                    <input
                        ref={inputRef}
                        value={currentStatus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
            ) : (
                <div>
                    <span onClick={handleClick}>{currentStatus}</span>
                </div>
            )}
        </>
    );
};
