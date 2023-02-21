import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.png'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };


    const onFollowClick = (userId) => {
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) { props.follow(userId) }
        });
    };


    const onUnFollowClick = (userId) => {
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) { props.unfollow(userId) }
        });
    };


    return (
        <div className={style.container}>
            <div>
                {props.users.map((u) => {
                    return (
                        <div key={u.id} className={style.Userscontainer}>
                            <div className={style.avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small || userPhoto} alt='avatar' />
                                </NavLink>
                                {u.followed
                                    ? <button onClick={() => onUnFollowClick(u.id)}>unfollow</button>
                                    : <button onClick={() => onFollowClick(u.id)}>follow</button>}
                            </div>
                            <div className={style.description}>
                                <div className={style.aboutInfo}>
                                    <div>{u.name}</div>
                                    <div className={style.location}>
                                        <div>{"u.location.city"}</div>
                                        <div>{"u.location.country"}</div>
                                    </div>
                                </div>
                                <div className={style.status}>{u.status}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={style.paginationBlock}>
                {pages.map((p) => {
                    return (
                        <button onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? style.selectedPage : style.nonSelectedPage}>{p}</button>
                    )
                })}
            </div>
        </div>
    );
};


export default Users;