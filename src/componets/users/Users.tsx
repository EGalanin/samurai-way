import React, { useEffect, useState } from 'react';
import baseUserPhoto from '../../../src/assets/images/avatardefault_92824.svg';
import { UserType } from '../../redax/users-reduser';
import axios from 'axios';
import s from './users.module.css'

type Props = {
    users: UserType[];
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserType[]) => void;
};

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const Users: React.FC<Props> = ({ users, follow, unfollow, setUsers }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                setUsers(res.data.items);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setUsers]);

    return (
        <div>
            <div>
                <span>1</span>
                <span className={s.selected}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {loading ? <div>Loading...</div> : users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.img} src={u.photos.small || baseUserPhoto} alt="" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'Some country'}</div>
                            <div>{'Some city'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};



