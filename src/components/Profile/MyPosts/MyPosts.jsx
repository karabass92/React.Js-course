import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let posts = props.postsData.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.changePostText(text);
    };

    let onAddPost = () => {
        props.addPost();
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.createPostBlock}>
                <div>
                    <textarea placeholder="Input a new post here" ref={newPostElement} value={props.newPostText} onChange={onPostChange} className={classes.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost} className={classes.addPostBtn}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );

};


export default MyPosts;