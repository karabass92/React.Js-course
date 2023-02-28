import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";


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
                <div className={classes.descriptionItem}>
                    <img src={props.profile.photos.large} alt='avatar' />
                </div>
                <div className={classes.descriptionItem}>
                    <div>Обо мне:</div>
                    Контакты:
                    <div>Facebook:</div>
                    <div>Website:</div>
                    <div>Vkontakte:</div>
                    <div>Twitter:</div>
                    <div>Instagram:</div>
                    <div>YouTube:</div>
                    <div>GitHub:</div>
                    <div>MainLink:</div>
                </div>
                <div className={classes.descriptionItem}>
                    <div>{props.profile.aboutMe ? props.profile.aboutMe : 'Не указано'}</div>
                    <br />
                    <div>{props.profile.contacts.facebook ? props.profile.contacts.facebook : 'Не указан'}</div>
                    <div>{props.profile.contacts.website ? props.profile.contacts.website : 'Не указан'}</div>
                    <div>{props.profile.contacts.vk ? props.profile.contacts.vk : 'Не указан'}</div>
                    <div>{props.profile.contacts.twitter ? props.profile.contacts.twitter : 'Не указан'}</div>
                    <div>{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'Не указан'}</div>
                    <div>{props.profile.contacts.youtube ? props.profile.contacts.youtube : 'Не указан'}</div>
                    <div>{props.profile.contacts.github ? props.profile.contacts.github : 'Не указан'}</div>
                    <div>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'Не указан'}</div>
                </div>
                <div className={classes.descriptionItem}>
                    <div>Имя:{props.profile.fullName ? props.profile.fullName : 'Не указано'}</div>
                    <div>Поиск работы:{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'Нет'}</div>
                </div>
            </div>
            <ProfileStatus status='Hello my frineds' />
        </div>
    );
};


export default ProfileInfo;