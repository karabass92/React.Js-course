const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialSate = {
    postsData: [
        { id: 1, message: 'Hello i am post 1', likesCount: 12 },
        { id: 2, message: 'Hello i am post 2', likesCount: 14 },
        { id: 3, message: 'Hello i am post 3', likesCount: 16 },
    ],
    newPostText: '',
    profile: null
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
            return {...state, profile: action.profile};
            
        default:
            return state;
    };
};


export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_TEXT_POST, newText: text };
};


export const addPostActionCreator = () => {
    return { type: ADD_POST };
};


export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
};


export default profileReducer;