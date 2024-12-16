import {RootState} from '../../src/redax/redax-store';

export const getUsersPage = (state: RootState) => state.usersPage?.users;

export const getPageSize = (state: RootState) => state.usersPage?.pageSize;

export const getTotalCount = (state: RootState) => state.usersPage?.totalCount;

export const getCurrentPage = (state: RootState) => state.usersPage?.currentPage;

export const getIsFetching = (state: RootState) => state.usersPage?.isFetching;

export const getFollowingInProgress = (state: RootState) => state.usersPage?.followingInProgress;