import FriendsBlock from "./FriendsBlock";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        friendsData: state.sideBar.friendsData
    };
};

const FriendsBlockContainer = connect(mapStateToProps,)(FriendsBlock);


export default FriendsBlockContainer;