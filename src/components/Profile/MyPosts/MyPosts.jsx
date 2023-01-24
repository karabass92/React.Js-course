import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>my posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hello i am post 1'/>
                <Post message='Hello i am post 2'/>
                <Post message='Hello i am post 3'/>
            </div>
        </div>
    );
}

export default MyPosts;