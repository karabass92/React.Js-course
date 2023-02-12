import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../redux/usersReducer";
import Users from "./Users";


let mapStateToProrps = (state) => {
    return {
        users: state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    };
};


const UsersContainer = connect(mapStateToProrps, mapDispatchToProps)(Users);


export default UsersContainer;