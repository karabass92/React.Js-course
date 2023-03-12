import { connect } from "react-redux";
import { getUsers, followUser, unfollowUser } from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getPageSize, getUsersListSuperSelector, getTotalUsersCount, getFollowingStatus, getFetchingStatus, getCurrentPage } from "../../redux/usersSelectors";


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
                    : <Users 
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                        followingInPropgress={this.props.followingInPropgress}/>
                }
            </>
        )
    };
};


/*let mapStateToProrps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInPropgress: state.usersPage.followingInPropgress
    };
};
*/

let mapStateToProrps = (state) => {
    return {
        users: getUsersListSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetchingStatus(state),
        followingInPropgress: getFollowingStatus(state)
    };
};


const UsersContainer = connect(mapStateToProrps, 
    { getUsers, followUser, unfollowUser })(UsersAPI);


export default UsersContainer;