import { profileAPI } from "../api/api";


const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';


let initialSate = {
    postsData: [
        { id: 1, message: 'Hello i am post 1', likesCount: 12 },
        { id: 2, message: 'Hello i am post 2', likesCount: 14 },
        { id: 3, message: 'Hello i am post 3', likesCount: 16 },
    ],
    newPostText: '',
    profile: null,
    status: null
};


const profileReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return Object.assign({}, state);
        case UPDATE_NEW_TEXT_POST:
            state.newPostText = action.newText;
            return Object.assign({}, state);
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case GET_USER_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    };
};


export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_TEXT_POST, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const getUserStatus = (status) => ({ type: GET_USER_STATUS, status });


export const getProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));;
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(getUserStatus(data))
    })
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(getUserStatus(status));
        }
    })
};


export default profileReducer;