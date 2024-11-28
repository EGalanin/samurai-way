import * as React from 'react';
import axios, {AxiosResponse} from 'axios';
import {UserType} from '../../src/redax/users-reduser';
// import {Response} from '../../src/componets/users/Users';
import {RootInterface} from '../redax/profileReducer';

export type ResponseType = {
        items: UserType[]
        totalCount: number
        error: string | null
        // userId?: string // удалить избыточно
}

export type Response<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export type MeResponseData = {
        id: number;
        login: string;
        email: string;
}


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
                'API-KEY': '923e2395-129b-4098-97f8-439987799b24'
        }
})

export const usersAPI = {
        getUsers: async (currentPage : number = 1, pageSize: number = 10): Promise<ResponseType> => {
                const response: AxiosResponse<ResponseType> = await instance.get<ResponseType>(
                    `users?page=${currentPage}&count=${pageSize}`)
                return response.data
        },
        follow: async (id: string): Promise<Response> => {
                const response: AxiosResponse<Response> = await instance.post<Response>(
                    `follow/${id}`)
                return response.data
        },
        unfollow: async (id: string): Promise<Response> => {
                const response: AxiosResponse<Response> = await instance.delete<Response>(
                    `follow/${id}`)
                return response.data
        },
        getProfile: async (userId: string): Promise<RootInterface> => {
                const response: AxiosResponse<RootInterface> = await instance.get<RootInterface>(
                    `profile/${userId}`)
                console.log(response.data)
                return response.data
        }
}

export const authAPI = {
        me: async (): Promise<Response<MeResponseData>> => {
                const response: AxiosResponse<Response<MeResponseData>> = await instance.get<Response<MeResponseData>>(
                    `auth/me`)
                return response.data
        }
}


