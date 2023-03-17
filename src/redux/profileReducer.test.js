import profileReducer from "./profileReducer";
import addPost from "./profileReducer";


let state = {
    postsData: [
        { id: 1, message: 'Hello i am post 1', likesCount: 12 },
        { id: 2, message: 'Hello i am post 2', likesCount: 14 },
        { id: 3, message: 'Hello i am post 3', likesCount: 16 },
    ]
};


it('New post should be added', () => {
    let action = addPost('some new text');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
});


it('message text should be correct', () => {
    let action = addPost('some new text');
    let newState = profileReducer(state, action);
    expect(newState.postsData[3]).toBe('some new text');
});