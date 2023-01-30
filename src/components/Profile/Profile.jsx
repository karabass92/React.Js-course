import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={classes.bb}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPost={props.addPost} />
        </div>
    );
}


export default Profile;