import { usersAPI } from "../api/api";


const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialSate = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInPropgress: []
};


const usersReducer = (state = initialSate, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    };
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    };
                    return user;
                })
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage};
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { ...state, 
                followingInPropgress: action.followingInPropgress 
                ? [ ...state.followingInPropgress, action.userId]
                : state.followingInPropgress.filter(id => id !== action.userId)
            }
        /*
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount}
        */
        default:
            return state;
    };
};


export const follow = (userId) => {
    return { type: FOLLOW, userId };
};


export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId };
};


export const setUsers = (users) => {
    return { type: SET_USERS, users };
};

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};

export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
};

export const setIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};


export const toggleFollowingInPropgress = (followingInPropgress, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInPropgress, userId}
};


export const getUsers = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setIsFetching(true));
    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setIsFetching(false));
};


export const followUser = (button, userId) => async (dispatch) => {
    button.disabled = true;
    dispatch(toggleFollowingInPropgress(true, userId));
    let data = await usersAPI.follow(userId);
    if (data.resultCode === 0) { dispatch(follow(userId)) }
    button.disabled = false;
    dispatch(toggleFollowingInPropgress(false, userId));
};


export const unfollowUser = (button, userId) => async (dispatch) => {
    button.disabled = true;
    dispatch(toggleFollowingInPropgress(true, userId));
    let data = await usersAPI.unfollow(userId);
    if (data.resultCode === 0) { dispatch(unfollow(userId)) }
    button.disabled = false;
    dispatch(toggleFollowingInPropgress(false, userId));
};


export default usersReducer;