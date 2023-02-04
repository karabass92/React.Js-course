const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messagesData.push(
                {
                    id: 4,
                    message: state.newMessageText
                }
            );
            state.newMessageText = '';
            return state;
        case  UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export default dialogsReducer;