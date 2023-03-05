import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPost(newPostText))
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;