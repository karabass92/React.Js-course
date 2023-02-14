import axios from "axios";
import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    };
    componentDidUpdate() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        };

        return (
            <div className={style.container}>
                <div>
                    {this.props.users.map((u) => {
                        return (
                            <div key={u.id} className={style.Userscontainer}>
                                <div className={style.avatar}>
                                    <img src={u.photos.small || userPhoto} alt='avatar' />

                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>follow</button>}
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
                        return(
                            <button onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p ? style.selectedPage : style.nonSelectedPage}>{p}</button>
                        )
                    })}
                </div>
            </div>
        );
    };
};

/* 
functional component type for Users
const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });}
    };

    return (
        <div className={style.container}>
            <button onClick={getUsers}>get users</button>
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
*/

export default Users;