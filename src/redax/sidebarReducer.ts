import React from 'react';

export type SidebarReducerType = {
    users: string[]
}
const initialState: SidebarReducerType = { users: ['Andrey', 'Sveta', 'Sacha'] };
// const initialState: SidebarReducerType = ['Andrey', 'Sveta', 'Sacha']


export const sidebarReducer = (state = initialState, action: any): SidebarReducerType => {

    return state
};

