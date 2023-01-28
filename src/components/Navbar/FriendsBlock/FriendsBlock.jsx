import React from "react";
import classes from './FriendsBlock.module.css'


const FriendsBlock = (props) => {

    let sideBar = {
        friendsData: [
            { id: 1, name: 'Person 1' },
            { id: 2, name: 'Person 2' },
            { id: 3, name: 'Person 3' },
        ],
    };
    
    return (
        <div className={classes.friendsBlock}>
            <span>Friends</span>
            <div className={classes.friendItems}>
                <div className={classes.friendItem}>
                    <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatar" />
                    <span>{sideBar.friendsData[0].name}</span>
                </div>
                <div className={classes.friendItem}>
                    <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatar" />
                    <span>{sideBar.friendsData[1].name}</span>
                </div>                
                <div className={classes.friendItem}>
                    <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatar" />
                    <span>{sideBar.friendsData[2].name}</span>
                </div>
            </div>
        </div>
    );
}


export default FriendsBlock;