import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    debugger;
    let posts = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.createPostBlock}>
                <div>
                    <textarea ref={newPostElement} className={classes.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost} className={classes.addPostBtn}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
    
}


export default MyPosts;