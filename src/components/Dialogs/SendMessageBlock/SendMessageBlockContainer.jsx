import { connect } from "react-redux";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";
import SendMessageBlock from "./SendMessageBlock";


const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    };
};

const SendMessageBlockContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessageBlock)


export default SendMessageBlockContainer;