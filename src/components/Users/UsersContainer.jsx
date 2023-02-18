import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,setIsFetching } from "../../redux/usersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setIsFetching(false)
        });
    };
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false)
        });
    };
    render() {
        return (
            <>
                {this.props.isFetching 
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching} />
                }
            </>
        )
    };
};


let mapStateToProrps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};


const UsersContainer = connect(mapStateToProrps, {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,setIsFetching})(UsersAPI);


export default UsersContainer;