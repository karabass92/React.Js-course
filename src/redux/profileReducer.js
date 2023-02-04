const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case  UPDATE_NEW_TEXT_POST:
            state.newPostText = action.newText;
            return state;
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