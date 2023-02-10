const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';


let initialSate = {
    postsData: [
        { id: 1, message: 'Hello i am post 1', likesCount: 12 },
        { id: 2, message: 'Hello i am post 2', likesCount: 14 },
        { id: 3, message: 'Hello i am post 3', likesCount: 16 },
    ],
    newPostText: ''
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
        default:
            return state;
    }
}


export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_TEXT_POST, newText: text };
};


export const addPostActionCreator = () => {
    return { type: ADD_POST };
};


export default profileReducer;