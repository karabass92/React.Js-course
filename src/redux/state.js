import { renderEntireTree } from "../render";


let state = {
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
    },
    sideBar: {
        friendsData: [
            { id: 1, name: 'Person 1' },
            { id: 2, name: 'Person 2' },
            { id: 3, name: 'Person 3' },
        ],
    },
};


export let addPost = () => {
    state.profilePage.postsData.push(
        {
            id: 4,
            message: state.profilePage.newPostText,
            likesCount: 0
        }
    )
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export default state;