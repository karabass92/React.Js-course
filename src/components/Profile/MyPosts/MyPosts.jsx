import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hello i am post 1', likesCount: 12 },
        { id: 2, message: 'Hello i am post 2', likesCount: 14 },
        { id: 3, message: 'Hello i am post 3', likesCount: 16 },
    ];

    let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="120" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}


export default MyPosts;