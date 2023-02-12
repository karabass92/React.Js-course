import React from "react";
import classes from './FriendsBlock.module.css';
import FriendItem from "./FriendItem/FriendItem";


const FriendsBlock = (props) => {

    let friends = props.friendsData.map(fr => <FriendItem key={fr.id} name={fr.name} />);

    return (
        <div className={classes.friendsBlock}>
            <span className={classes.friendsBlockTitle}>
                Friends
            </span>
            <div className={classes.friendsItems}>
                {friends}
            </div>
        </div>
    );
};


export default FriendsBlock;