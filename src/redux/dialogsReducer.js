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
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText;    
        return {
            ...state,
            messagesData: [...state.messagesData, {id:5, message: body}]
        }
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageText) => {
    return { type: ADD_MESSAGE, newMessageText };
};


export default dialogsReducer;