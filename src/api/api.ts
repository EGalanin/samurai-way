import axios, {AxiosResponse} from 'axios';
import {UserType} from '../../src/redax/users-reduser';
import {RootInterface} from '../redax/profileReducer';

const baseURL = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_KEY;

if (!baseURL || !apiKey) {
    throw new Error("Переменные окружения REACT_APP_URL и REACT_APP_KEY должны быть определены");
}

export type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export type Response<T = {}> = {
    data: T
    fieldsErrors?: string[]
    messages: string[]
    resultCode: number
}

export type MeResponseData = {
    id: number;
    login: string;
    email: string;
}

export type ResponseStatus = string

export type Login = {
    email: string
    password: string
    rememberMe: boolean
}

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        'API-KEY': apiKey
    }
});

export const usersAPI = {
    getUsers: async (currentPage: number = 1, pageSize: number = 10): Promise<ResponseType> => {
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
        console.log('Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile: async (userId: string): Promise<RootInterface> => {
        const response: AxiosResponse<RootInterface> = await instance.get<RootInterface>(
            `profile/${userId}`)
        return response.data
    },
    getStatus: async (userId: string): Promise<ResponseStatus> => {
        console.log('Get status')
        const response: AxiosResponse<ResponseStatus> = await instance.get<ResponseStatus>(
            `profile/status/${userId}`)
        console.log(response.data)
        return response.data
    },
    updateStatus: async (status: string): Promise<Response> => {
        const response: AxiosResponse<Response> = await instance.put<Response>(
            `profile/status`,
            {status})
        // console.log(response.data)
        return response.data
    }

}

export const authAPI = {
    me: async (): Promise<Response<MeResponseData>> => {
        const response: AxiosResponse<Response<MeResponseData>> = await instance.get<Response<MeResponseData>>(
            `auth/me`)
        return response.data
    },
    login: async (email: string, password: string, rememberMe: boolean): Promise<Response<Login>> => {
        const response: AxiosResponse<Response<Login>> = await instance.post<Response<Login>>(
            `auth/login`,
            {email, password, rememberMe})
        console.log(response.data)
        return response.data
    },
    logout: async (): Promise<Response> => {
        const response: AxiosResponse<Response> = await instance.delete<Response>(
            `auth/login`)
        return response.data
    },

}


