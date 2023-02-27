import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        changeMessageText: (text) => {dispatch(updateNewMessageTextActionCreator(text))}
    };
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);