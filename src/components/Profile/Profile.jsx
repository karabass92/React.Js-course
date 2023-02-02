import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={classes.bb}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>
    );
}


export default Profile;