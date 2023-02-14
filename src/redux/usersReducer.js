const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialSate = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 2
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
        /*
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount}
        */
        default:
            return state;
    };
};


export const followActionCreator = (userId) => {
    return { type: FOLLOW, userId };
};


export const unfollowActionCreator = (userId) => {
    return { type: UNFOLLOW, userId };
};


export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users };
};

export const setCurrentPageActionCreator = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};

export const setTotalUsersCountActionCreator = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
};


export default usersReducer;