import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer";
import MyContext from "../../../StateContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    /*let changePostText = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    };

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    */

    return (
        <MyContext.Consumer>
            {(store) => {
                debugger;
                let changePostText = (text) => {store.dispatch(updateNewPostActionCreator(text))};
                let addPost = () => {store.dispatch(addPostActionCreator())};
                return (
                    <MyPosts changePostText={changePostText} 
                        addPost={addPost} 
                        postsData={store.getState().profilePage.postsData} 
                        newPostText={store.getState().profilePage.newPostText} />
                )}
            }
        </MyContext.Consumer>
    );

};


export default MyPostsContainer;