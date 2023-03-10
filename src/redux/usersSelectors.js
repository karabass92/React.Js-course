import { createSelector } from "reselect";


export const getUsersList = (state) => { 
    return state.usersPage.users 
};


export const getUsersListSuperSelector = createSelector(getUsersList, (users) => {
    return users.filter( u => true)
});


export const getPageSize = (state) => { 
    return state.usersPage.pageSize 
};


export const getTotalUsersCount = (state) => { 
    return state.usersPage.totalUsersCount 
};


export const getCurrentPage = (state) => { 
    return state.usersPage.currentPage 
};


export const getFetchingStatus = (state) => { 
    return state.usersPage.isFetching 
};


export const getFollowingStatus = (state) => { 
    return state.usersPage.followingInPropgress 
};