import React from "react";
import classes from './FriendItem.module.css'


const FriendItem = (props) => {
    return (
        <div className={classes.friendItem}>
            <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatar" />
            <span className={classes.friendName}>{props.name}</span>
        </div>
    );
}


export default FriendItem;