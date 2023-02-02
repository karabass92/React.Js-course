const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello i am post 1', likesCount: 12 },
                { id: 2, message: 'Hello i am post 2', likesCount: 14 },
                { id: 3, message: 'Hello i am post 3', likesCount: 16 },
            ],
            newPostText: 'some text for new post'
        },
        dialogsPage: {
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
            newMessageText: 'Type some text here'
        },
        sideBar: {
            friendsData: [
                { id: 1, name: 'Person 1' },
                { id: 2, name: 'Person 2' },
                { id: 3, name: 'Person 3' },
            ],
        },
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

/*
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessage() {
        this._state.dialogsPage.messagesData.push(
            {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
        );
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
*/

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            this._state.dialogsPage.messagesData.push(
                {
                    id: 4,
                    message: this._state.dialogsPage.newMessageText
                }
            );
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_TEXT_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_TEXT_POST, newText: text };
};

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};

export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export default store;