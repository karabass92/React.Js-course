import axios from "axios";
import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.png'


const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    };

    return (
        <div className={style.container}>
            <div>
                {props.users.map((u) => {
                    return (
                        <div key={u.id} className={style.Userscontainer}>
                            <div className={style.avatar}>
                                <img src={u.photos.small || userPhoto} alt='avatar' />

                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>follow</button>}
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
        </div>
    );
};


export default Users;