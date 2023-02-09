const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogsData: [
        { id: 1, name: 'Person 1' },
        { id: 2, name: 'Person 2' },
        { id: 3, name: 'Person 3' },
        { id: 4, name: 'Person 4' },
        { id: 5, name: 'Person 5' },
    ],
    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: "What's you doing?" },
        { id: 4, message: 'Fine' },
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messagesData.push(
                {
                    id: 4,
                    message: state.newMessageText
                }
            );
            state.newMessageText = '';
            return Object.assign({}, state, { q: action.data });
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return Object.assign({}, state, { q: action.data });
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