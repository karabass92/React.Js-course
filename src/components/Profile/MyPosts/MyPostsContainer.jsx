import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

/*
const MyPostsContainer = (props) => {
    return (
        <MyContext.Consumer>
            {(store) => {
                debugger;
                let changePostText = (text) => {store.dispatch(updateNewPostActionCreator(text))};
                let addPost = () => {store.dispatch(addPostActionCreator())};
                return (
                    <MyPosts changePostText={changePostText} 
                        addPost={addPost} 
                        postsData={store.getState().profilePage.postsData} 
                        newPostText={store.getState().profilePage.newPostText} />
                )}
            }
        </MyContext.Consumer>
    );

};
*/

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