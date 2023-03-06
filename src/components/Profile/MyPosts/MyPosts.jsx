import React from "react";
import AddPostForm from "./AddPostForm/AddPostForm";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let posts = props.postsData.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    const addNewPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={addNewPost} />
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
};


export default MyPosts;