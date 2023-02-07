import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let changePostText = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    };

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    return (
        <MyPosts changePostText={changePostText} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
    );

};


export default MyPostsContainer;