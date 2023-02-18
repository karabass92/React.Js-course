import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={classes.contentImg} src='https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg' alt="pict" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='avatar' />
                ava + descripton
            </div>
        </div>
    );
};


export default ProfileInfo;