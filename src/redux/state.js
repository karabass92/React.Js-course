import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";


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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        
        this._callSubscriber(this._state);
    }
}


export default store;