import React from "react";
import classes from './SendMessageBlock.module.css';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";


const SendMessageBlock = (props) => {
    let messageText = React.createRef();

    let onMessageTextChange = () => {
        let text = messageText.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    return (
        <div className={classes.main}>
            <textarea ref={messageText} value={props.newMessageText} onChange={onMessageTextChange} className={classes.textInput} />
            <button onClick={addMessage} className={classes.button}>
                Send message
            </button>
        </div>
    );
};


export default SendMessageBlock;