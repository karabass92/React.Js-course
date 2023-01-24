import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img className={classes.itemImg} src="https://www.meme-arsenal.com/memes/ef9c370f81baa60eeb292d620bd3595c.jpg" alt="avatar" />
                {props.message}
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;