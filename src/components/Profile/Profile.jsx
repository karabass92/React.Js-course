import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'


const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.contentImg} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt="pict" />
            </div>
            <div>ava + descripton</div>
            <MyPosts />
        </div>
    );
}


export default Profile;