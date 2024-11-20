import * as React from 'react';
import axios, {AxiosResponse} from 'axios';
import {UserType} from '../../src/redax/users-reduser';
import {Response} from '../../src/componets/users/Users';

export type ResponseType = {
        items: UserType[]
        totalCount: number
        error: string | null
}

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
                'API-KEY': '923e2395-129b-4098-97f8-439987799b24'
        }
})

export const usersAPI = {
        getUsers: async (currentPage: number, pageSize: number): Promise<ResponseType> => {
                const response: AxiosResponse<ResponseType> = await instance.get<ResponseType>(
                    `users?page=${currentPage}&count=${pageSize}`)
                return response.data
        },
        postUser: async (id: string): Promise<Response> => {
                const response: AxiosResponse<Response> = await instance.post<Response>(
                    `follow/${id}`)
                return response.data
        },
        deleteUser: async (id: string): Promise<Response> => {
                const response: AxiosResponse<Response> = await instance.delete<Response>(
                    `follow/${id}`)
                return response.data
        },

}


