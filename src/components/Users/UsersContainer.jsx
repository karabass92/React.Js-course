import { connect } from "react-redux";
import { follow, unfollow, toggleFollowingInPropgress, getUsers, followUser } from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };
    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        followUser={this.props.followUser}
                        unfollow={this.props.unfollow}
                        isFetching={this.props.isFetching} 
                        followingInPropgress={this.props.followingInPropgress}
                        toggleFollowingInPropgress={this.props.toggleFollowingInPropgress} />
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
        isFetching: state.usersPage.isFetching,
        followingInPropgress: state.usersPage.followingInPropgress
    };
};


const UsersContainer = connect(mapStateToProrps, 
    { 
        follow, unfollow, toggleFollowingInPropgress, getUsers
    })(UsersAPI);


export default UsersContainer;