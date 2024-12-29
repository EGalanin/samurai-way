import React, {useEffect, useRef, useState} from 'react';

type ProfileStatusType = {
    status: string;
    updateUserStatus: (status: string) => void// пофиксить
};

export const ProfileStatus = ({ status, updateUserStatus }: ProfileStatusType) => {

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
        updateUserStatus(currentStatus);
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
                    {currentStatus ? (
                        <span onClick={handleClick}>{currentStatus}</span>
                    ) : (
                        <span onClick={handleClick}><b>Status:</b> Нет статуса</span>
                    )}
                </div>
            )}
        </>
    );
};
