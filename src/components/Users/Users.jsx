import React from "react";
import style from './Users.module.css'


const Users = (props) => {
    return (
        <div className={style.container}>
            <div>
                {props.users.map((u) => {
                    return ( 
                        <div key={u.id} className={style.Userscontainer}>
                            <div className={style.avatar}>
                                <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatar" />
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>follow</button>}
                            </div>
                            <div className={style.description}>
                                <div className={style.aboutInfo}>
                                    <div>{u.fullName}</div>
                                    <div className={style.location}>
                                        <div>{u.location.city}</div>
                                        <div>{u.location.country}</div>
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