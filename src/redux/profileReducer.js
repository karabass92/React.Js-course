import { profileAPI } from "../api/api";


const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const GET_USER_STATUS = 'profile/GET_USER_STATUS';


let initialSate = {
    postsData: [
        { id: 1, message: 'Hello i am post 1', likesCount: 12 },
        { id: 2, message: 'Hello i am post 2', likesCount: 14 },
        { id: 3, message: 'Hello i am post 3', likesCount: 16 },
    ],
    profile: null,
    status: null
};


const profileReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case GET_USER_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    };
};


export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const getUserStatus = (status) => ({ type: GET_USER_STATUS, status });


export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));;
};

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(getUserStatus(data))
};

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(getUserStatus(status));
    };
};


export default profileReducer;