const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialSate = {
    users: [
        { id: 1, followed: false, fullName: 'Dmitriy K.', status: 'blabla', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, followed: true, fullName: 'Karen Sh.', status: 'qwerty', location: { city: 'Petropavlovsk', country: 'Kazakhstan' } },
        { id: 3, followed: true, fullName: 'Marina Sh.', status: 'Boom!', location: { city: 'Petropavlovsk', country: 'Kazakhstan' } }
    ]
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
            return { ...state, users: [...state.users, ...action.users] };
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


export default usersReducer;